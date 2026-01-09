const themeToggle = document.getElementById("themeToggle");
const toggleDot = document.getElementById("toggleDot");
const html = document.documentElement;
const header = document.getElementById("heading");
const names = document.getElementById("name");
const sobre_mim = document.getElementById("about_me");
const texto_sobre = document.getElementById("about");
const levaPortfolio = document.getElementById("portfolio_path");
const portfolio = document.getElementById("portfolio");
const levaStack = document.getElementById("stack_path");
const stack = document.getElementById("stack");
const levaContact = document.getElementById("contact_path");
const contact = document.getElementById("contact");

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

//Animação para aparecer o NavBar superior
document.addEventListener("DOMContentLoaded", () => {
  aparecerHeader();
});

function aparecerHeader() {
  setTimeout(() => {
    header.classList.remove("opacity-0");
    header.classList.add("opacity-100");
  }, 1200);
}

//Animação para aparecer o nome:
document.addEventListener("DOMContentLoaded", () => {
  aparecerNome();
});

function aparecerNome() {
  setTimeout(() => {
    names.classList.remove("opacity-0");
    names.classList.add("opacity-100");
  }, 350);
}

//Função para Scrollar a página
sobre_mim.addEventListener("click", (e) => {
  e.preventDefault();
  texto_sobre.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//Função para levar ao portfolio
levaPortfolio.addEventListener("click", (e) => {
  e.preventDefault();
  portfolio.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//Função para levar à stacks
levaStack.addEventListener("click", (e) => {
  e.preventDefault();
  stack.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//Função para levar ao Contatos
levaContact.addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
