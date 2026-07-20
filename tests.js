const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

function loadLogic() {
  const source = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
  const browserBindings = source.indexOf('document.querySelectorAll("[data-action]")');
  assert.notEqual(browserBindings, -1, "Impossibile isolare la logica dai binding del browser");
  const context = {document: {querySelectorAll: () => []}};
  vm.createContext(context);
  vm.runInContext(`${source.slice(0, browserBindings)};this.appTestApi={
    topics,reviewData,curated,generatorSpecs,generateQuestion,buildQuestionSet,questionKey,
    generateNumeric,generateSlice,generateRange,generateList,generateFilter,generateIloc,
    generateRolling,generateGroupBy
  };`, context);
  return context.appTestApi;
}

const app = loadLogic();
const catalog = Object.entries(app.topics).flatMap(([area, list]) =>
  list.map(topic => ({area, topic}))
);

test("ogni argomento ha domande e scheda di ripasso", () => {
  assert.equal(app.reviewData.length, catalog.length);
  for (const item of catalog) {
    assert(app.reviewData.some(card => card.area === item.area && card.topic === item.topic),
      `Scheda mancante: ${item.area} / ${item.topic}`);
    assert(app.curated.some(question => question.area === item.area && question.topic === item.topic),
      `Domanda mancante: ${item.area} / ${item.topic}`);
  }
});

test("la banca statica ha struttura e risposte valide", () => {
  assert.equal(new Set(app.curated.map(question => question.id)).size, app.curated.length);
  for (const question of app.curated) {
    assert.equal(question.options.length, 4, question.id);
    assert.equal(new Set(question.options).size, 4, question.id);
    assert(question.correct >= 0 && question.correct < question.options.length, question.id);
    assert(app.topics[question.area].includes(question.topic), question.id);
  }
});

test("i generatori producono sempre quattro opzioni uniche", () => {
  const generators = [
    app.generateNumeric, app.generateSlice, app.generateRange, app.generateList,
    app.generateFilter, app.generateIloc, app.generateRolling, app.generateGroupBy
  ];
  for (const generate of generators) {
    for (let index = 0; index < 1000; index++) {
      const question = generate();
      assert.equal(question.options.length, 4);
      assert.equal(new Set(question.options).size, 4);
      assert(question.correct >= 0 && question.correct < 4);
    }
  }
});

test("i test per argomento terminano e rispettano il filtro", () => {
  for (const {topic} of catalog) {
    const questions = app.buildQuestionSet(10, topic, "Tutti", false);
    assert(questions.length > 0 && questions.length <= 10, topic);
    assert(questions.every(question => question.topic === topic), topic);
    assert.equal(new Set(questions.map(app.questionKey)).size, questions.length, topic);
  }
  assert.equal(app.buildQuestionSet(10, "Fondamenti", "difficile", false).length, 0);
});

test("i filtri di difficoltà non restituiscono domande fuori selezione", () => {
  for (const {topic} of catalog) {
    for (const difficulty of ["facile", "medio", "difficile"]) {
      const questions = app.buildQuestionSet(10, topic, difficulty, false);
      assert(questions.every(question => question.topic === topic && question.difficulty === difficulty),
        `${topic} / ${difficulty}`);
    }
  }
  const quick = app.buildQuestionSet(20, "Tutti", "Tutti", false);
  assert.equal(quick.length, 20);
  assert.equal(new Set(quick.map(app.questionKey)).size, 20);
});

test("la simulazione d'esame ha 20 domande uniche e bilanciate", () => {
  for (let run = 0; run < 500; run++) {
    const questions = app.buildQuestionSet(20, "Tutti", "Tutti", true);
    assert.equal(questions.length, 20);
    assert.equal(questions.filter(question => question.area === "Python").length, 10);
    assert.equal(questions.filter(question => question.area === "Pandas").length, 10);
    assert.equal(new Set(questions.map(app.questionKey)).size, 20);
  }
});

test("i blocchi di codice del ripasso usano il colore dedicato", () => {
  const styles = fs.readFileSync(path.join(__dirname, "styles.css"), "utf8");
  assert.match(styles, /\.review-card code\s*\{[^}]*color:\s*var\(--code-text\)/);
});

test("HTML, CSS e JavaScript hanno riferimenti locali coerenti", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
  const source = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, "Sono presenti id HTML duplicati");
  const dynamicIds = [...source.matchAll(/\bid=\\?"([^"]+)\\?"/g)].map(match => match[1]);
  const declaredIds = new Set([...ids, ...dynamicIds]);
  const referencedIds = [...source.matchAll(/\$\("([^"]+)"\)/g)].map(match => match[1]);
  for (const id of referencedIds) assert(declaredIds.has(id), `Elemento HTML mancante: #${id}`);
  assert.match(html, /<link rel="stylesheet" href="styles\.css">/);
  assert.match(html, /<script src="app\.js"><\/script>/);
});

test("manifest e cache offline includono gli asset dell'app", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "manifest.json"), "utf8"));
  const worker = fs.readFileSync(path.join(__dirname, "sw.js"), "utf8");
  assert.equal(manifest.name, "Python & Pandas Trainer");
  assert.equal(manifest.lang, "it");
  for (const asset of ["index.html", "styles.css", "app.js", "manifest.json", "icon.svg"]) {
    assert(fs.existsSync(path.join(__dirname, asset)), `File mancante: ${asset}`);
    assert(worker.includes(`./${asset}`), `Asset non incluso nella cache offline: ${asset}`);
  }
  assert.doesNotMatch(worker, /li-study-hub/);
});
