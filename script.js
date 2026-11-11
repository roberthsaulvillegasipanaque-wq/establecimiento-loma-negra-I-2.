
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Menú para celulares
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Año automático del pie de página
document.getElementById("year").textContent =
    new Date().getFullYear();
