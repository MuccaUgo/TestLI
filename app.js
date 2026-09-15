/* Financial Accounting Study Hub — concepts browser and quiz engine. */
(function () {
  "use strict";

  var questions = [], index = 0, answers = [], currentMode = "full";
  var sessionOptions = {}, sessionId = null, quizComplete = false;
  // A changed question bank must not restore answers against different questions.
  var bankSignature = String(JSON.stringify(QUESTIONS).split("").reduce(function (hash, char) {
    return ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  }, 0));

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function plain(s) { return String(s == null ? "" : s).replace(/\s+/g, " ").trim(); }
  function clean(s) { return esc(plain(s)); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsRemove(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function lsJSON(k, fallback) {
    try { return JSON.parse(lsGet(k) || JSON.stringify(fallback)); } catch (e) { return fallback; }
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------------- theme ---------------- */
  function syncThemeButton() {
    var btn = $("themeToggle");
    if (!btn) return;
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.title = dark ? "Switch to light theme" : "Switch to dark theme";
  }
  function toggleTheme() {
    var cur = document.documentElement.getAttribute("data-theme") || "light";
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    lsSet("fa_theme", next);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = next === "dark" ? "#0a0f12" : "#0f4c5c";
    syncThemeButton();
  }

  /* ---------------- navigation ---------------- */
  function closeNav() {
    $("mainNav").classList.remove("open");
    $("hambBtn").setAttribute("aria-expanded", "false");
  }
  function setActive(sectionId) {
    document.querySelectorAll("#mainNav button").forEach(function (b) {
      b.classList.remove("active"); b.removeAttribute("aria-current");
    });
    var map = {
      home: "homeBtn", concepts: "conceptsBtn", mistakes: "mistakesBtn",
      testSection: currentMode === "full" ? "fullBtn" : currentMode === "practice10" ? "practiceBtn" : "examBtn"
    };
    var btn = $(map[sectionId]);
    if (btn) { btn.classList.add("active"); btn.setAttribute("aria-current", "page"); }
  }
  function showSection(id) {
    closeNav();
    document.querySelectorAll(".app-section").forEach(function (s) { s.classList.add("hidden"); });
    $(id).classList.remove("hidden");
    setActive(id);
    if (id === "mistakes") renderMistakes();
    if (id === "home") renderHomeStats();
    if (id !== "testSection") {
      questions = []; index = 0; answers = [];
      $("progress").style.width = "0%";
      updateHeader();
    }
    window.scrollTo(0, 0);
  }

  /* ---------------- concepts ---------------- */
  function conceptSearchText(c) {
    return (c.cat + " " + c.title + " " + c.meaning + " " + c.how + " " + c.trap).toLowerCase();
  }
  function renderConcepts() {
    var grid = $("conceptsGrid");
    grid.innerHTML = CONCEPTS.map(function (c, i) {
      return '<article class="topic concept-card" data-i="' + i + '" data-cat="' + esc(c.cat) + '">' +
        '<div class="kicker">' + esc(c.cat) + "</div><strong>" + esc(c.title) + "</strong>" +
        "<p><b>Meaning.</b> " + esc(c.meaning) + "</p>" +
        '<details open><summary>How it works</summary><p class="mini">' + esc(c.how) + "</p></details>" +
        '<details><summary>Typical trap</summary><p class="mini">' + esc(c.trap) + "</p></details>" +
        "</article>";
    }).join("");

    var pills = $("conceptPills");
    pills.innerHTML = ["All"].concat(CATEGORIES).map(function (cat, i) {
      return '<button class="pill' + (i === 0 ? " primary" : "") + '" data-cat="' + esc(cat) + '">' +
        esc(cat) + "</button>";
    }).join("");
  }
  function filterConcepts() {
    var activePill = $("conceptPills").querySelector(".pill.primary");
    var cat = activePill ? activePill.dataset.cat : "All";
    var qtext = ($("conceptSearch").value || "").toLowerCase().trim();
    var shown = 0;
    document.querySelectorAll("#conceptsGrid .concept-card").forEach(function (el) {
      var c = CONCEPTS[Number(el.dataset.i)];
      var okCat = cat === "All" || c.cat === cat;
      var okText = !qtext || conceptSearchText(c).indexOf(qtext) !== -1;
      var visible = okCat && okText;
      el.classList.toggle("hidden", !visible);
      if (visible) shown++;
    });
    if ($("conceptResultCount")) $("conceptResultCount").textContent = shown + " of " + CONCEPTS.length + " concepts";
    if ($("conceptEmpty")) $("conceptEmpty").classList.toggle("hidden", shown !== 0);
    return shown;
  }

  /* ---------------- quiz ---------------- */
  function sessionKey(mode) { return "fa_session_" + mode; }
  function newSessionId() {
    return window.crypto && window.crypto.randomUUID
      ? window.crypto.randomUUID()
      : Date.now().toString(36) + "-" + Math.random().toString(36).slice(2) + "-" + Math.random().toString(36).slice(2);
  }
  function readSession(mode) {
    var s = lsJSON(sessionKey(mode), null);
    if (!s || s.version !== 2 || typeof s.id !== "string" || !s.id || s.bank !== bankSignature || s.mode !== mode ||
        !Array.isArray(s.questionIds) || !s.questionIds.length ||
        !Array.isArray(s.answers) || s.answers.length !== s.questionIds.length ||
        !Number.isInteger(s.index) || s.index < 0 || s.index >= s.questionIds.length ||
        !s.options || ["All"].concat(CATEGORIES).indexOf(s.options.category) === -1 ||
        ["ordered", "shuffle"].indexOf(s.options.order) === -1) return null;
    var seen = {};
    var valid = s.questionIds.every(function (id, i) {
      if (!Number.isInteger(id) || !QUESTIONS[id] || seen[id]) return false;
      seen[id] = true;
      return s.answers[i] === null ||
        (["A", "B", "C", "D"].indexOf(s.answers[i]) !== -1 && !!QUESTIONS[id].options[s.answers[i]]);
    });
    return valid && studyStats().completedSessions.indexOf(s.id) === -1 ? s : null;
  }
  function saveSession(replace) {
    if (!questions.length || quizComplete) return;
    var saved = lsJSON(sessionKey(currentMode), null);
    if (studyStats().completedSessions.indexOf(sessionId) !== -1 ||
        (!replace && saved && saved.id !== sessionId)) return;
    lsSet(sessionKey(currentMode), JSON.stringify({
      version: 2, id: sessionId, bank: bankSignature, mode: currentMode, index: index,
      questionIds: questions.map(function (q) { return QUESTIONS.indexOf(q); }),
      answers: questions.map(function (_, i) { return answers[i] ? answers[i].selected : null; }),
      options: sessionOptions
    }));
  }
  function renderResume() {
    var existing = $("resumeSession");
    if (existing) existing.remove();
    var s = readSession(currentMode);
    $("startBtn").textContent = s ? "Start a new session" : "Start session";
    if (!s) return;
    var box = document.createElement("div");
    box.id = "resumeSession";
    box.className = "session-resume";
    box.innerHTML = '<div><strong>Your saved session</strong><p class="small">' +
      s.answers.filter(Boolean).length + " of " + s.questionIds.length + " answered · " +
      esc(s.options.category === "All" ? "All areas" : s.options.category) +
      '</p></div><button class="primary" id="resumeBtn">Resume question ' + (s.index + 1) + "</button>";
    $("setup").insertBefore(box, $("startBtn"));
  }
  function resumeQuiz(mode) {
    var s = readSession(mode);
    if (!s) { openTest(mode); return; }
    currentMode = mode;
    sessionId = s.id;
    sessionOptions = s.options;
    questions = s.questionIds.map(function (id) { return QUESTIONS[id]; });
    answers = s.answers.map(function (selected, i) {
      return selected ? { selected: selected, correct: questions[i].correct, isRight: selected === questions[i].correct } : null;
    });
    index = s.index;
    quizComplete = false;
    $("category").value = s.options.category;
    $("orderMode").value = s.options.order;
    $("startFrom").value = s.options.start || 1;
    showSection("testSection");
    $("setup").classList.add("hidden");
    $("summary").classList.add("hidden");
    $("quiz").classList.remove("hidden");
    renderQuestion();
  }
  function poolFor(cat) {
    return QUESTIONS.filter(function (q) { return cat === "All" || q.cat === cat; });
  }
  function openTest(mode) {
    currentMode = mode;
    questions = []; answers = []; index = 0; quizComplete = false;
    showSection("testSection");
    $("setup").classList.remove("hidden");
    $("quiz").classList.add("hidden");
    $("summary").classList.add("hidden");
    $("category").value = "All";
    $("orderMode").value = "ordered";
    $("startFrom").value = 1;
    $("categoryWrap").classList.toggle("hidden", mode === "exam");
    $("startWrap").classList.toggle("hidden", mode !== "full");
    $("orderWrap").classList.toggle("hidden", mode !== "full");
    if (mode === "full") {
      $("testTitle").textContent = "Full Test";
      $("setupDesc").textContent = "Work through the full question bank with immediate feedback. Your answers, area and question order are saved automatically in this browser.";
    } else if (mode === "practice10") {
      $("testTitle").textContent = "Practice 10 Questions";
      $("setupDesc").textContent = "10 random questions with immediate feedback. You can focus on a single area.";
    } else {
      $("testTitle").textContent = "Exam Test";
      $("setupDesc").textContent = "10 random questions across all areas. No feedback until the final recap.";
    }
    renderResume();
    updateHeader();
  }
  function buildQuestions() {
    if (currentMode === "exam") return shuffle(QUESTIONS).slice(0, 10);
    var pool = poolFor($("category").value);
    if (currentMode === "practice10") return shuffle(pool).slice(0, 10);
    if ($("orderMode").value === "shuffle") pool = shuffle(pool);
    return pool;
  }
  function startQuiz() {
    questions = buildQuestions();
    if (!questions.length) {
      $("setupDesc").textContent = "No questions available for this area. Pick another one.";
      return;
    }
    var start = parseInt($("startFrom").value, 10);
    if (!isFinite(start)) start = 1;
    start = Math.min(Math.max(start, 1), questions.length);
    index = currentMode === "full" ? start - 1 : 0;
    answers = [];
    quizComplete = false;
    sessionId = newSessionId();
    sessionOptions = {
      category: currentMode === "exam" ? "All" : $("category").value,
      order: $("orderMode").value,
      start: index + 1
    };
    saveSession(true);
    $("setup").classList.add("hidden");
    $("summary").classList.add("hidden");
    $("quiz").classList.remove("hidden");
    renderQuestion();
  }
  function updateHeader() {
    $("count").textContent = questions.length
      ? (index + 1) + " / " + questions.length + " questions"
      : QUESTIONS.length + " questions · " + CONCEPTS.length + " concepts";
    $("progress").style.width = questions.length
      ? Math.round((answers.filter(Boolean).length / questions.length) * 100) + "%"
      : "0%";
  }
  function renderQuestion(notice) {
    updateHeader();
    var q = questions[index];
    if (!q) return;
    saveSession();
    var letters = ["A", "B", "C", "D"].filter(function (l) { return q.options && q.options[l]; });
    $("quiz").innerHTML =
      '<div class="meta"><span class="badge">' + esc(q.cat) + "</span>" +
      '<span class="badge">' + esc(q.title) + "</span>" +
      '<span class="badge">Question ' + (index + 1) + " of " + questions.length + "</span></div>" +
      '<p class="quiz-notice" id="quizNotice" role="status">' + esc(notice ||
        (currentMode === "exam" ? "Exam mode · You can change your answers. Results appear at the end." : "Select an answer to see the explanation.")) + "</p>" +
      '<label class="small" for="jumpTo">Jump to question</label>' +
      '<div class="controls"><input id="jumpTo" type="number" min="1" max="' + questions.length + '" value="' + (index + 1) + '">' +
      '<button class="ghost" id="jumpBtn">Go</button></div>' +
      '<div class="question">' + clean(q.question) + "</div>" +
      letters.map(function (l) {
        return '<button class="option" id="opt-' + l + '" data-letter="' + l + '" aria-pressed="false"><strong>' + l + ".</strong> " + clean(q.options[l]) + "</button>";
      }).join("") +
      '<div id="feedback" class="feedback" aria-live="polite"></div>' +
      '<div class="quiznav"><button class="ghost" id="prevBtn"' + (index === 0 ? " disabled" : "") + ">Back</button>" +
      '<button class="primary" id="nextBtn"' + (answers[index] ? "" : " disabled") + ">" +
      (index === questions.length - 1 ? "Finish" : "Next") + "</button></div>" +
      '<p class="swipe-hint">Swipe left or right to navigate</p>';
    if (answers[index]) applyAnswered();
  }
  function jumpToQuestion() {
    var n = parseInt($("jumpTo").value, 10);
    if (!isFinite(n)) return;
    n = Math.min(Math.max(n, 1), questions.length);
    index = n - 1;
    renderQuestion();
    window.scrollTo(0, 0);
  }
  function answer(letter) {
    var q = questions[index];
    if (!q || quizComplete || !q.options[letter] || (answers[index] && currentMode !== "exam")) return;
    answers[index] = { selected: letter, correct: q.correct, isRight: letter === q.correct };
    saveSession();
    applyAnswered();
  }
  function applyAnswered() {
    var q = questions[index], a = answers[index];
    ["A", "B", "C", "D"].forEach(function (l) {
      var b = $("opt-" + l);
      if (!b) return;
      b.disabled = currentMode !== "exam";
      b.setAttribute("aria-pressed", String(l === a.selected));
      b.classList.toggle("selected", currentMode === "exam" && l === a.selected);
      if (currentMode !== "exam") {
        if (l === a.correct) b.classList.add("correct");
        if (l === a.selected && !a.isRight) b.classList.add("wrong");
      }
    });
    if (currentMode !== "exam") {
      var selectedExp = clean(q.expl && q.expl[a.selected] ? q.expl[a.selected] : "");
      var correctExp = clean(q.recap || (q.expl && q.expl[a.correct]) || "");
      var fb = $("feedback");
      fb.className = "feedback show " + (a.isRight ? "ok" : "bad");
      fb.innerHTML = "<h3>" + (a.isRight ? "Correct." : "Wrong.") + " Answer: " + a.correct + ". " +
        clean(q.options[a.correct]) + "</h3>" +
        (!a.isRight && selectedExp ? "<p><strong>Why your answer does not work:</strong> " + selectedExp + "</p>" : "") +
        "<p><strong>Recap:</strong> " + correctExp + "</p>";
    }
    $("nextBtn").disabled = false;
    updateHeader();
  }
  function nextQuestion() {
    if (!answers[index] || quizComplete) return;
    if (index < questions.length - 1) { index++; renderQuestion(); window.scrollTo(0, 0); }
    else showSummary();
  }
  function prevQuestion() {
    if (index > 0) { index--; renderQuestion(); window.scrollTo(0, 0); }
  }

  /* ---------------- mistakes ---------------- */
  function saveMistakes(wrongItems) {
    var saved = lsJSON("fa_mistakes", []);
    if (!Array.isArray(saved)) saved = [];
    wrongItems.forEach(function (x) {
      saved.push({
        t: Date.now(), cat: x.q.cat, title: x.q.title,
        question: plain(x.q.question).slice(0, 300),
        correct: x.a.correct, correctText: plain(x.q.options[x.a.correct]),
        selected: x.a.selected, recap: plain(x.q.recap).slice(0, 600)
      });
    });
    lsSet("fa_mistakes", JSON.stringify(saved.slice(-100)));
  }
  function renderMistakes() {
    var saved = lsJSON("fa_mistakes", []);
    saved = Array.isArray(saved) ? saved.filter(function (m) { return m && typeof m === "object"; }).reverse() : [];
    $("mistakeList").innerHTML = saved.length
      ? saved.map(function (m) {
          return '<div class="review-item"><span class="badge">' + esc(m.cat) + "</span> " +
            '<span class="badge">' + esc(m.title || "") + "</span>" +
            "<p><strong>" + esc(m.question) + "</strong></p>" +
            "<p>Your answer: " + esc(m.selected) + " · Correct: " + esc(m.correct) + ". " + esc(m.correctText) + "</p>" +
            '<p class="small">' + esc(m.recap) + "</p></div>";
        }).join("")
      : "<p>No saved mistakes yet.</p>";
  }

  /* ---------------- stats ---------------- */
  function localDate(date) {
    return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
  }
  function studyStats() {
    var s = lsJSON("fa_stats", {});
    if (!s || typeof s !== "object" || Array.isArray(s)) s = {};
    ["totalAnswered", "totalCorrect", "streak"].forEach(function (key) {
      if (!Number.isFinite(s[key]) || s[key] < 0) s[key] = 0;
    });
    s.completedSessions = Array.isArray(s.completedSessions)
      ? s.completedSessions.filter(function (id) { return typeof id === "string"; }) : [];
    return s;
  }
  function updateStudyStats(correct, total, completedId) {
    if (!total) return false;
    var s = studyStats();
    if (s.completedSessions.indexOf(completedId) !== -1) return false;
    s.completedSessions.push(completedId);
    s.totalAnswered = (s.totalAnswered || 0) + total;
    s.totalCorrect = (s.totalCorrect || 0) + correct;
    var today = localDate(new Date());
    if (s.lastStudyDate !== today) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      s.streak = s.lastStudyDate === localDate(yesterday) ? (s.streak || 0) + 1 : 1;
      s.lastStudyDate = today;
    }
    lsSet("fa_stats", JSON.stringify(s));
    return true;
  }
  function recordCompletion(correct, total, wrongItems, mode, completedId) {
    function record() {
      if (updateStudyStats(correct, total, completedId)) saveMistakes(wrongItems);
      var saved = lsJSON(sessionKey(mode), null);
      if (saved && saved.id === completedId) lsRemove(sessionKey(mode));
      renderHomeStats();
    }
    // Serialize the read/update across tabs where Web Locks is available.
    if (navigator.locks && navigator.locks.request) {
      navigator.locks.request("fa_record_completion", record).catch(record);
    } else record();
  }
  function renderHomeStats() {
    var el = $("homeStats");
    if (!el) return;
    var s = studyStats();
    var acc = s.totalAnswered ? Math.round((s.totalCorrect / s.totalAnswered) * 100) : 0;
    var streak = s.streak || 0;
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (s.lastStudyDate !== localDate(new Date()) && s.lastStudyDate !== localDate(yesterday)) streak = 0;
    el.innerHTML =
      '<div class="stat-pill"><strong>' + (streak > 0 ? "🔥 " + streak : "0") + "</strong><span>Day streak</span></div>" +
      '<div class="stat-pill"><strong>' + (s.totalAnswered ? acc + "%" : "—") + "</strong><span>Accuracy</span></div>" +
      '<div class="stat-pill"><strong>' + (s.totalAnswered || 0) + "</strong><span>Answered</span></div>";
    var saved = readSession("full");
    var cbtn = $("continueBtn");
    if (cbtn) cbtn.textContent = saved ? "Resume Full Test · Q" + (saved.index + 1) : "Start Full Test";
  }

  function celebrate() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colors = ["#0f4c5c", "#2a9d8f", "#10b981", "#f0a35c", "#4fb3c8", "#f04438"];
    var box = document.createElement("div");
    box.className = "confetti-container";
    for (var i = 0; i < 40; i++) {
      var el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.left = Math.random() * 100 + "%";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDelay = Math.random() * 0.4 + "s";
      el.style.animationDuration = 2 + Math.random() * 1.2 + "s";
      box.appendChild(el);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 3600);
  }

  /* ---------------- summary ---------------- */
  function showSummary() {
    if (quizComplete || !questions.length) return;
    var unanswered = questions.reduce(function (items, _, i) {
      if (!answers[i]) items.push(i);
      return items;
    }, []);
    if (currentMode !== "full" && unanswered.length) {
      index = unanswered[0];
      renderQuestion("You have " + unanswered.length + " unanswered " +
        (unanswered.length === 1 ? "question" : "questions") + ". Complete them to finish this session.");
      window.scrollTo(0, 0);
      return;
    }
    quizComplete = true;
    $("quiz").classList.add("hidden");
    $("summary").classList.remove("hidden");
    var answeredCount = questions.length - unanswered.length;
    $("progress").style.width = Math.round(answeredCount / questions.length * 100) + "%";
    var correctCount = answers.filter(function (a) { return a && a.isRight; }).length;
    var wrongItems = answers.map(function (a, i) { return { a: a, q: questions[i], i: i }; })
      .filter(function (x) { return x.a && !x.a.isRight; });
    recordCompletion(correctCount, answeredCount, wrongItems, currentMode, sessionId);
    if (!unanswered.length && correctCount / questions.length >= 0.8) celebrate();

    var byCat = {};
    answers.forEach(function (a, i) {
      if (!a) return;
      var c = questions[i].cat;
      if (!byCat[c]) byCat[c] = { n: 0, ok: 0 };
      byCat[c].n++;
      if (a && a.isRight) byCat[c].ok++;
    });
    var catBadges = Object.keys(byCat).map(function (c) {
      return '<span class="badge">' + esc(c) + " " + byCat[c].ok + "/" + byCat[c].n + "</span>";
    }).join(" ");

    $("summary").innerHTML =
      "<h2>Final recap</h2>" +
      '<div class="summary-grid">' +
      '<div class="stat"><strong>' + correctCount + "</strong>Correct</div>" +
      '<div class="stat"><strong>' + wrongItems.length + "</strong>Wrong</div>" +
      '<div class="stat"><strong>' + unanswered.length + "</strong>Unanswered</div>" +
      '<div class="stat"><strong>' + (answeredCount ? Math.round((correctCount / answeredCount) * 100) + "%" : "—") + "</strong>Accuracy</div>" +
      "</div><p class=\"small\">" + answeredCount + " of " + questions.length + " questions answered. Accuracy uses answered questions.</p>" +
      "<p>" + catBadges + "</p><h3>Questions to review</h3>" +
      (wrongItems.length
        ? wrongItems.map(function (x) {
            return '<div class="review-item"><strong>Question ' + (x.i + 1) + "</strong> · " + esc(x.q.cat) + " · " + esc(x.q.title) +
              "<br>Your answer: " + esc(x.a.selected) + ". Correct: " + esc(x.a.correct) + ". " + clean(x.q.options[x.a.correct]) +
              '<br><span class="small">' + clean(x.q.recap) + "</span></div>";
          }).join("")
        : "<p>No wrong answers among the questions you answered.</p>") +
      '<div class="quiznav"><button class="ghost" id="restartBtn">Restart</button>' +
      '<button class="primary" id="backHomeBtn">Back to menu</button></div>';
  }

  /* ---------------- wiring ---------------- */
  function init() {
    // category select options
    $("category").innerHTML = ["All"].concat(CATEGORIES).map(function (c) {
      return '<option value="' + esc(c) + '">' + esc(c === "All" ? "All areas" : c) + "</option>";
    }).join("");

    renderConcepts();
    filterConcepts();

    $("themeToggle").addEventListener("click", toggleTheme);
    $("hambBtn").setAttribute("aria-controls", "mainNav");
    $("hambBtn").setAttribute("aria-expanded", "false");
    $("hambBtn").addEventListener("click", function () {
      var open = $("mainNav").classList.toggle("open");
      $("hambBtn").setAttribute("aria-expanded", String(open));
    });

    document.body.addEventListener("click", function (e) {
      var t = e.target.closest("[data-section],[data-mode]");
      if (t) {
        if (t.dataset.section) showSection(t.dataset.section);
        else if (t.id === "continueBtn" && readSession("full")) resumeQuiz("full");
        else openTest(t.dataset.mode);
        return;
      }
      if (e.target.closest("[data-reset-concepts]")) {
        $("conceptSearch").value = "";
        $("conceptPills").querySelectorAll(".pill").forEach(function (p) {
          p.classList.toggle("primary", p.dataset.cat === "All");
        });
        filterConcepts();
        $("conceptSearch").focus();
        return;
      }
      var pill = e.target.closest("#conceptPills .pill");
      if (pill) {
        $("conceptPills").querySelectorAll(".pill").forEach(function (p) { p.classList.remove("primary"); });
        pill.classList.add("primary");
        filterConcepts();
        return;
      }
      var opt = e.target.closest(".option");
      if (opt && !opt.disabled) { answer(opt.dataset.letter); return; }
      if (e.target.closest("#jumpBtn")) { jumpToQuestion(); return; }
      if (e.target.closest("#nextBtn")) { nextQuestion(); return; }
      if (e.target.closest("#prevBtn")) { prevQuestion(); return; }
      if (e.target.closest("#startBtn")) { startQuiz(); return; }
      if (e.target.closest("#resumeBtn")) { resumeQuiz(currentMode); return; }
      if (e.target.closest("#restartBtn")) { openTest(currentMode); return; }
      if (e.target.closest("#backHomeBtn")) { showSection("home"); return; }
      if (e.target.closest("#clearMistakesBtn")) {
        try { localStorage.removeItem("fa_mistakes"); } catch (err) {}
        renderMistakes();
      }
    });

    $("conceptSearch").addEventListener("input", filterConcepts);
    $("quiz").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && e.target.id === "jumpTo") { e.preventDefault(); jumpToQuestion(); }
    });

    // swipe navigation inside the quiz
    var sx = 0, sy = 0;
    var quiz = $("quiz");
    quiz.addEventListener("touchstart", function (e) {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    quiz.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      var dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0 && answers[index]) nextQuestion();
        else if (dx > 0 && index > 0) prevQuestion();
      }
    }, { passive: true });

    syncThemeButton();
    setActive("home");
    updateHeader();
    renderHomeStats();

    if ("serviceWorker" in navigator && location.protocol !== "file:") {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function () {});
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
