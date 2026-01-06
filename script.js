const themeToggle = document.getElementById("themeToggle");
const toggleDot = document.getElementById("toggleDot");
const html = document.documentElement;

// Detecta preferência do sistema
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Tema salvo ou fallback para sistema
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme ?? (systemPrefersDark ? "dark" : "light");

// Aplica tema inicial
setTheme(initialTheme);

// Clique no toggle
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

// Função centralizada
function setTheme(theme) {
  const isDark = theme === "dark";

  html.classList.toggle("dark", isDark);
  localStorage.setItem("theme", theme);

  // Animação do botão
  toggleDot.classList.toggle("translate-x-6", isDark);
  toggleDot.textContent = isDark ? "🌙" : "☀️";
}
