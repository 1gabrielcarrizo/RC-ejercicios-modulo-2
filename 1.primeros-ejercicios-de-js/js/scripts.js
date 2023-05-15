const footer = document.getElementById("footer");
const date = new Date().getFullYear();

const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const nav = document.getElementById("nav");
const cards = Array.from(document.querySelectorAll(".card"));
const buttons = Array.from(document.querySelectorAll(".btn-outline-light"));

footer.innerHTML = `Copyright &copy; ${date} all rights reserved by <a href="https://www.linkedin.com/in/1gabrielcarrizo/" target="_blank">Gabriel Carrizo</a>`

// Función para aplicar el tema oscuro
const applyDarkTheme = () => {
    document.body.classList.add("dark");
    toggleIcon.classList.replace("fa-sun", "fa-moon");
    toggleText.textContent = "Dark mode";
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
    footer.classList.replace("bg-light", "bg-dark");
    cards.forEach(card => card.classList.add("bg-dark"));
    buttons.forEach(button => button.classList.replace("btn-outline-dark", "btn-outline-light"));
};

// Función para aplicar el tema claro
const applyLightTheme = () => {
    document.body.classList.remove("dark");
    toggleIcon.classList.replace("fa-moon", "fa-sun");
    toggleText.textContent = "Light mode";
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
    footer.classList.replace("bg-dark", "bg-light");
    cards.forEach(card => card.classList.remove("bg-dark"));
    buttons.forEach(button => button.classList.replace("btn-outline-light", "btn-outline-dark"));
};

// Obtener el tema almacenado en el almacenamiento local
const savedTheme = localStorage.getItem("theme");

// Aplicar el tema guardado al cargar la página
if (savedTheme === "dark") {
    applyDarkTheme();
} else {
    applyLightTheme();
}

// Función para cambiar el tema
const changeTheme = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }

    // Guardar el tema seleccionado en el almacenamiento local
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
};

toggleTheme.addEventListener("click", changeTheme);