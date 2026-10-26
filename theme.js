// En-Garde-TH — theme toggle (shared by every page)
const root = document.documentElement;
const themeBtn = document.querySelector("#theme");

function setTheme(t) {
  root.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☀ Light" : "☾ Dark";
  try { localStorage.setItem("eg-theme", t); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem("eg-theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

themeBtn.addEventListener("click", () =>
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));
