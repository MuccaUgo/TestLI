(() => {
  if (document.body.dataset.area === "python") return;
  const button = document.getElementById("themeToggle");
  let saved;
  try { saved = localStorage.getItem("theme"); } catch {}
  const apply = (theme, persist = false) => {
    document.documentElement.dataset.theme = theme;
    button?.setAttribute("aria-pressed", String(theme === "dark"));
    if (button) button.title = theme === "dark" ? "Use light theme" : "Use dark theme";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#0b0b0f" : "#f4f4f7";
    if (persist) { try { localStorage.setItem("theme", theme); } catch {} }
  };
  apply(saved === "light" || saved === "dark" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  button?.addEventListener("click", () => apply(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true));
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();
