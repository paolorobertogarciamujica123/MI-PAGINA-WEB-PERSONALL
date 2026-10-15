/* =====================================
   1. MOSTRAR EL AÑO ACTUAL
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =====================================
   2. MENSAJE EN LA CONSOLA
===================================== */

console.log("¡Bienvenido a mi página personal!");



/* =====================================
   3. EFECTO SUAVE EN LOS ENLACES
===================================== */

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =====================================
   4. MENSAJE DE BIENVENIDA
===================================== */

document.addEventListener("DOMContentLoaded", function () {
    console.log("La página se ha cargado correctamente.");
});