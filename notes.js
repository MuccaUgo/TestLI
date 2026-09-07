(() => {
  const details = document.querySelector("#contents");
  if (!details) return;
  const media = window.matchMedia("(max-width: 900px)");
  const sync = () => { if (media.matches) details.removeAttribute("open"); else details.setAttribute("open", ""); };
  sync();
  media.addEventListener?.("change", sync);
  document.querySelectorAll(".contents-sidebar a").forEach(link => {
    link.addEventListener("click", () => { if (media.matches) details.removeAttribute("open"); });
  });

  // A link to an exam opens that paper even when its disclosure is collapsed.
  const revealExam = hash => {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    const paper = target?.closest(".exam-paper");
    if (!paper) return;
    paper.open = true;
    requestAnimationFrame(() => paper.scrollIntoView({ block: "start" }));
  };
  document.addEventListener("click", event => {
    const link = event.target.closest?.('a[href^="#"]');
    if (link) revealExam(link.getAttribute("href"));
  });
  window.addEventListener("hashchange", () => revealExam(location.hash));
  revealExam(location.hash);

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();
