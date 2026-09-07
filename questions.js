const normalizeQuestionText = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const matchesQuestion = (record, filters) =>
  (filters.chapter === "all" || record.chapters.includes(filters.chapter)) &&
  (filters.source === "all" || record.source === filters.source) &&
  (filters.year === "all" || record.year === filters.year) &&
  normalizeQuestionText(filters.query).trim().split(/\s+/).every(word => record.search.includes(word));

if (typeof module !== "undefined") module.exports = { normalizeQuestionText, matchesQuestion };

if (typeof document !== "undefined") (() => {
  const form = document.getElementById("questionFilters");
  const search = document.getElementById("questionSearch");
  const chapter = document.getElementById("chapterFilter");
  const source = document.getElementById("sourceFilter");
  const year = document.getElementById("yearFilter");
  const count = document.getElementById("resultCount");
  const empty = document.getElementById("emptyState");
  const records = [...document.querySelectorAll(".original-question")].map(element => ({
    element, chapters: element.dataset.chapters.split(" "), source: element.dataset.source,
    year: element.dataset.year, search: normalizeQuestionText(element.textContent)
  }));
  const apply = () => {
    const filters = { chapter: chapter.value, source: source.value, year: year.value, query: search.value };
    let visible = 0;
    for (const record of records) {
      record.element.hidden = !matchesQuestion(record, filters);
      if (!record.element.hidden) visible++;
    }
    count.textContent = `${visible} of ${records.length} questions`;
    empty.hidden = visible !== 0;
  };
  const params = new URLSearchParams(location.search);
  const requestedChapter = params.get("chapter");
  if ([...chapter.options].some(option => option.value === requestedChapter)) chapter.value = requestedChapter;
  form.addEventListener("submit", event => event.preventDefault());
  form.addEventListener("input", apply);
  form.addEventListener("change", apply);
  form.addEventListener("reset", () => requestAnimationFrame(apply));
  document.getElementById("closeQuestions").addEventListener("click", () => records.forEach(record => { record.element.open = false; }));
  const reveal = () => {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target?.classList.contains("original-question")) return;
    if (target.hidden) { form.reset(); search.value = ""; chapter.value = source.value = year.value = "all"; apply(); }
    target.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  };
  window.addEventListener("hashchange", reveal);
  apply();
  reveal();
})();
