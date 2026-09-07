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
})();
