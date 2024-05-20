async function loadTranslations() {
  const response = await fetch("./json/language.json");
  return await response.json();
}

function setLanguage(language) {
  loadTranslations()
    .then((translations) => {
      // Traducir elementos del navbar
      document.querySelectorAll(".nav-item a").forEach((link) => {
        const key = link.getAttribute("data-key");
        if (translations[language][key]) {
          link.innerText = translations[language][key];
        }
      });

      // Traducir otros elementos de la página
      document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
          element.innerText = translations[language][key];
        }
      });
    })
    .catch((error) => {
      console.error("Error loading language file:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // Agregar evento de cambio de idioma a los enlaces de idioma del navbar
  document.querySelectorAll(".nav-item [data-lang]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const language = event.target.getAttribute("data-lang");
      setLanguage(language);
    });
  });

  // Traducir la página al cargar
  setLanguage("en");
});
