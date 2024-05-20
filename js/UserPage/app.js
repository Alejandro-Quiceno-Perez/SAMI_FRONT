// Función para alternar la clase 'active' en el menu-section y ocultar/mostrar el menú
function toggleMenuSection() {
    let menuSection = document.querySelector(".menu-section");
    menuSection.classList.toggle("active");
    console.log("toggleMenuSection function called");

    // Verifica si el menú está visible o no y ajusta la visibilidad según corresponda
    if (menuSection.classList.contains("active")) {
        menuSection.style.display = "block";
    } else {
        menuSection.style.display = "none";
    }
}

// Función para cargar las traducciones desde el archivo JSON
async function loadTranslations() {
    const response = await fetch("./json/language.json");
    return await response.json();
}

// Función para establecer el idioma de la página
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

    // Traducir la página al cargar (por defecto en inglés)
    setLanguage("en");

    // Agrega el evento click al botón de menú
    document.getElementById("btn-request").addEventListener("click", toggleMenuSection);

    // Script para generar opciones de edad del 1 al 100, menos de 10 años y más de 100 años
    const ageSelect = document.getElementById("age");
    ageSelect.innerHTML = "<option value=''>Select</option>";

    const less10age = document.createElement("option");
    less10age.value = "<10";
    less10age.textContent = "less than 10 years";
    ageSelect.appendChild(less10age);

    for (let i = 11; i <= 99; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        ageSelect.appendChild(option);
    }

    const more100age = document.createElement("option");
    more100age.value = ">100";
    more100age.textContent = "more than 100 years";
    ageSelect.appendChild(more100age);
    

    
});