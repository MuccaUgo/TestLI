"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const { randomUUID } = require("node:crypto");

// A deliberately small DOM fixture for testing user-visible quiz behavior without
// adding browser dependencies. Real layout and touch behavior need browser QA.
class Element {
  constructor(tag, attributes = {}) {
    this.tagName = tag;
    this.attributes = attributes;
    this.children = [];
    this.listeners = {};
    this.style = {};
    this.value = attributes.value || "";
    this.disabled = "disabled" in attributes;
    this.dataset = {};
    Object.keys(attributes).filter(k => k.startsWith("data-")).forEach(k => {
      this.dataset[k.slice(5)] = attributes[k];
    });
    this.classList = {
      contains: name => this.className.split(/\s+/).includes(name),
      add: name => { this.classList.toggle(name, true); },
      remove: name => { this.classList.toggle(name, false); },
      toggle: (name, force) => {
        const names = new Set(this.className.split(/\s+/).filter(Boolean));
        const include = force === undefined ? !names.has(name) : force;
        if (include) names.add(name); else names.delete(name);
        this.className = [...names].join(" ");
        return include;
      }
    };
  }
  get id() { return this.attributes.id; }
  set id(value) { this.attributes.id = value; }
  get className() { return this.attributes.class || ""; }
  set className(value) { this.attributes.class = value; }
  setAttribute(key, value) { this.attributes[key] = String(value); }
  getAttribute(key) { return this.attributes[key] ?? null; }
  removeAttribute(key) { delete this.attributes[key]; }
  appendChild(child) { child.parentElement = this; this.children.push(child); return child; }
  insertBefore(child, before) {
    child.parentElement = this;
    this.children.splice(this.children.indexOf(before), 0, child);
  }
  remove() {
    if (this.parentElement) this.parentElement.children = this.parentElement.children.filter(c => c !== this);
    this.parentElement = null;
  }
  focus() { this.focused = true; }
  addEventListener(type, handler) { (this.listeners[type] ||= []).push(handler); }
  matches(selector) {
    return selector.split(",").some(part => {
      const pieces = part.trim().split(/\s+/);
      const simple = pieces.pop();
      const bits = simple.match(/#[\w-]+|\.[\w-]+|\[[\w-]+\]|^[\w-]+/g) || [];
      if (!bits.length || !bits.every(bit => {
        if (bit[0] === "#") return this.id === bit.slice(1);
        if (bit[0] === ".") return this.classList.contains(bit.slice(1));
        if (bit[0] === "[") return bit.slice(1, -1) in this.attributes;
        return this.tagName === bit;
      })) return false;
      if (!pieces.length) return true;
      return !!this.parentElement?.closest(pieces.join(" "));
    });
  }
  closest(selector) { return this.matches(selector) ? this : this.parentElement?.closest(selector) || null; }
  querySelectorAll(selector) {
    return this.children.flatMap(c => [c, ...c.querySelectorAll("*")])
      .filter(c => selector === "*" || c.matches(selector));
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  get innerHTML() { return this.html || ""; }
  set innerHTML(html) {
    this.html = html;
    this.children = [];
    const stack = [this];
    const tokens = html.match(/<[^>]+>/g) || [];
    for (const token of tokens) {
      if (token.startsWith("</")) { if (stack.length > 1) stack.pop(); continue; }
      const tag = token.match(/^<([\w-]+)/)?.[1];
      if (!tag) continue;
      const attributes = {};
      for (const match of token.slice(tag.length + 1).matchAll(/([\w-]+)(?:="([^"]*)")?/g)) {
        attributes[match[1]] = match[2] || "";
      }
      const child = new Element(tag, attributes);
      stack.at(-1).appendChild(child);
      if (!["input", "br", "meta", "link", "hr"].includes(tag)) stack.push(child);
    }
  }
}

const bank = Array.from({ length: 12 }, (_, i) => ({
  cat: i < 6 ? "Principles" : "Balance Sheet", title: "Topic " + i,
  question: "Question " + i + " about assets & liabilities?",
  options: { A: "Correct & complete", B: "Incorrect", C: "Another choice", D: "Last choice" },
  correct: "A", expl: { A: "A is correct.", B: "B is incorrect." }, recap: "Assets & liabilities."
}));

function loadApp(storage = new Map(), random = 0.25, locks = undefined) {
  const root = new Element("html", { "data-theme": "light" });
  const body = root.appendChild(new Element("body"));
  body.innerHTML = `
    <button id="themeToggle"></button><button id="hambBtn"></button>
    <nav id="mainNav">
      <button id="homeBtn" data-section="home"></button><button id="conceptsBtn" data-section="concepts"></button>
      <button id="fullBtn" data-mode="full"></button><button id="practiceBtn" data-mode="practice10"></button>
      <button id="examBtn" data-mode="exam"></button><button id="mistakesBtn" data-section="mistakes"></button>
    </nav><div id="progress"></div><div id="count"></div>
    <section id="home" class="app-section"><div id="homeStats"></div><button id="continueBtn" data-mode="full"></button></section>
    <section id="concepts" class="app-section hidden"><div id="conceptsGrid"></div><div id="conceptPills"></div>
      <input id="conceptSearch"><div id="conceptResultCount"></div><div id="conceptEmpty"></div></section>
    <section id="testSection" class="app-section hidden"><section id="setup"><h2 id="testTitle"></h2><p id="setupDesc"></p>
      <div id="categoryWrap"><select id="category"></select></div>
      <div id="orderWrap"><select id="orderMode"></select></div><div id="startWrap"><input id="startFrom"></div>
      <button id="startBtn"></button></section><section id="quiz" class="hidden"></section><section id="summary" class="hidden"></section></section>
    <section id="mistakes" class="app-section hidden"><div id="mistakeList"></div><button id="clearMistakesBtn"></button></section>`;
  const document = {
    body, documentElement: root, readyState: "complete",
    getElementById: id => root.querySelector("#" + id),
    querySelectorAll: selector => root.querySelectorAll(selector),
    querySelector: selector => root.querySelector(selector),
    createElement: tag => new Element(tag)
  };
  const localStorage = {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: key => storage.delete(key)
  };
  const context = vm.createContext({
    document, localStorage, navigator: { locks }, location: { protocol: "https:" },
    window: { scrollTo() {}, matchMedia: () => ({ matches: true }), crypto: { randomUUID } },
    QUESTIONS: bank, CONCEPTS: [{ cat: "Principles", title: "Accrual", meaning: "Timing", how: "Recognize", trap: "Cash" }],
    CATEGORIES: ["Principles", "Balance Sheet"], Math: Object.assign(Object.create(Math), { random: () => random }),
    setTimeout() {}
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, "../app.js"), "utf8"), context);
  const get = id => { const el = document.getElementById(id); assert.ok(el, "Missing element: " + id); return el; };
  function click(id) {
    const target = get(id);
    if (target.disabled) return;
    const event = { target };
    for (const handler of target.listeners.click || []) handler(event);
    for (const handler of body.listeners.click || []) handler(event);
  }
  const saved = mode => JSON.parse(storage.get("fa_session_" + mode));
  function jump(number) { get("jumpTo").value = String(number); click("jumpBtn"); }
  return { get, click, storage, saved, jump };
}

test("exam selection stays neutral, can be changed, and survives revisiting", () => {
  const app = loadApp();
  app.click("examBtn"); app.click("startBtn"); app.click("opt-B");
  for (const letter of ["A", "B", "C", "D"]) {
    assert.equal(app.get("opt-" + letter).classList.contains("correct"), false);
    assert.equal(app.get("opt-" + letter).classList.contains("wrong"), false);
    assert.equal(app.get("opt-" + letter).disabled, false);
  }
  assert.equal(app.get("opt-B").getAttribute("aria-pressed"), "true");
  assert.equal(app.get("feedback").innerHTML, "");
  app.click("opt-C");
  assert.equal(app.get("opt-B").classList.contains("selected"), false);
  assert.equal(app.get("opt-C").classList.contains("selected"), true);
  app.click("nextBtn"); app.click("prevBtn");
  assert.equal(app.get("opt-C").getAttribute("aria-pressed"), "true");
  assert.equal(app.get("feedback").innerHTML, "");
});

test("reload restores the exact shuffled session, answers, filter and position", () => {
  let app = loadApp();
  app.click("fullBtn");
  app.get("category").value = "Balance Sheet";
  app.get("orderMode").value = "shuffle";
  app.get("startFrom").value = "2";
  app.click("startBtn"); app.click("opt-B"); app.click("nextBtn");
  const before = app.saved("full");
  app.click("homeBtn");
  app = loadApp(app.storage, 0.9);
  app.click("continueBtn");
  assert.deepEqual(app.saved("full"), before);
  assert.equal(app.get("category").value, "Balance Sheet");
  assert.equal(app.get("orderMode").value, "shuffle");
  assert.equal(app.get("jumpTo").value, "3");
  app.click("prevBtn");
  assert.equal(app.get("opt-B").classList.contains("wrong"), true);
  assert.equal(app.get("opt-B").disabled, true);
});

test("exam cannot finish with gaps; a completed session is counted only once", () => {
  const app = loadApp();
  app.click("examBtn"); app.click("startBtn");
  app.jump(10); app.click("opt-B"); app.click("nextBtn");
  assert.equal(app.get("summary").classList.contains("hidden"), true);
  assert.equal(app.get("jumpTo").value, "1");
  assert.match(app.get("quiz").innerHTML, /9 unanswered questions/);
  assert.equal(app.storage.has("fa_stats"), false);
  for (let i = 0; i < 9; i++) { app.click("opt-A"); app.click("nextBtn"); }
  app.click("nextBtn");
  const stats = JSON.parse(app.storage.get("fa_stats"));
  assert.equal(stats.totalAnswered, 10);
  assert.equal(stats.totalCorrect, 9);
  assert.equal(JSON.parse(app.storage.get("fa_mistakes")).length, 1);
  assert.equal(app.storage.has("fa_session_exam"), false);
  app.click("nextBtn");
  assert.equal(JSON.parse(app.storage.get("fa_stats")).totalAnswered, 10);
});

test("a partial full test counts only answers and stores readable mistake text", () => {
  const app = loadApp();
  app.click("fullBtn"); app.get("startFrom").value = "12"; app.click("startBtn");
  app.click("opt-B"); app.click("nextBtn");
  const stats = JSON.parse(app.storage.get("fa_stats"));
  assert.equal(stats.totalAnswered, 1);
  assert.equal(stats.totalCorrect, 0);
  assert.match(app.get("summary").innerHTML, /11<\/strong>Unanswered/);
  assert.match(app.get("summary").innerHTML, /1<\/strong>Wrong/);
  const mistake = JSON.parse(app.storage.get("fa_mistakes"))[0];
  assert.equal(mistake.correctText, "Correct & complete");
  app.click("mistakesBtn");
  assert.match(app.get("mistakeList").innerHTML, /Correct &amp; complete/);
  assert.doesNotMatch(app.get("mistakeList").innerHTML, /&amp;amp;/);
});

test("different quiz modes keep independent saved sessions", () => {
  const app = loadApp();
  app.click("fullBtn"); app.click("startBtn"); app.click("opt-A");
  const full = app.saved("full");
  app.click("examBtn"); app.click("startBtn"); app.click("opt-B");
  assert.deepEqual(app.saved("full"), full);
  app.click("fullBtn"); app.click("resumeBtn");
  assert.equal(app.get("opt-A").classList.contains("correct"), true);
  assert.equal(app.saved("exam").answers[0], "B");
});

test("invalid saved sessions and malformed optional history do not crash startup", () => {
  const storage = new Map([
    ["fa_session_full", '{"version":1,"questionIds":[999]}'],
    ["fa_stats", "null"], ["fa_mistakes", "{}"]
  ]);
  const app = loadApp(storage);
  app.click("fullBtn");
  assert.equal(app.get("startBtn").textContent, "Start session");
  app.click("mistakesBtn");
  assert.match(app.get("mistakeList").innerHTML, /No saved mistakes/);
});

test("the same saved session completed in two tabs records results once", () => {
  const first = loadApp();
  first.click("fullBtn"); first.get("startFrom").value = "12"; first.click("startBtn"); first.click("opt-B");
  const second = loadApp(first.storage);
  second.click("continueBtn");
  first.click("nextBtn");
  // Navigating the stale tab must not recreate the completed saved session.
  second.jump(12);
  assert.equal(first.storage.has("fa_session_full"), false);
  second.click("nextBtn");
  const stats = JSON.parse(first.storage.get("fa_stats"));
  assert.equal(stats.totalAnswered, 1);
  assert.equal(stats.completedSessions.length, 1);
  assert.equal(JSON.parse(first.storage.get("fa_mistakes")).length, 1);
});

test("a stale tab cannot overwrite or delete a newer session for the same mode", () => {
  const first = loadApp();
  first.click("fullBtn"); first.get("startFrom").value = "12"; first.click("startBtn"); first.click("opt-B");
  const oldId = first.saved("full").id;
  const second = loadApp(first.storage);
  second.click("fullBtn"); second.click("startBtn"); second.click("opt-A");
  const newer = second.saved("full");
  assert.notEqual(newer.id, oldId);
  first.jump(12);
  assert.deepEqual(first.saved("full"), newer);
  first.click("nextBtn");
  assert.deepEqual(first.saved("full"), newer);
});

test("shared browser locks serialize duplicate completions across tabs", async () => {
  let queue = Promise.resolve();
  const names = [];
  const locks = {
    request(name, callback) {
      names.push(name);
      const operation = queue.then(callback);
      queue = operation.catch(() => {});
      return operation;
    }
  };
  const first = loadApp(new Map(), 0.25, locks);
  first.click("fullBtn"); first.get("startFrom").value = "12"; first.click("startBtn"); first.click("opt-B");
  const second = loadApp(first.storage, 0.25, locks);
  second.click("continueBtn");
  first.click("nextBtn"); second.click("nextBtn");
  await queue;
  assert.deepEqual(names, ["fa_record_completion", "fa_record_completion"]);
  assert.equal(JSON.parse(first.storage.get("fa_stats")).totalAnswered, 1);
  assert.equal(JSON.parse(first.storage.get("fa_mistakes")).length, 1);
  assert.equal(first.storage.has("fa_session_full"), false);
});

test("only Full Test shows an order selector", () => {
  const app = loadApp();
  app.click("fullBtn");
  assert.equal(app.get("orderWrap").classList.contains("hidden"), false);
  app.click("practiceBtn");
  assert.equal(app.get("orderWrap").classList.contains("hidden"), true);
  app.click("examBtn");
  assert.equal(app.get("orderWrap").classList.contains("hidden"), true);
});
