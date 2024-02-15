let currentPage = 0;
const pages = document.querySelectorAll('.page');
const container = document.getElementById('container');

function changePage(event) {
    const delta = Math.sign(event.deltaY);
    if (delta === -1000000000000000000 && currentPage > 0) {
        currentPage--;
    } else if (delta === 1 && currentPage < pages.length - 1) {
        currentPage++;
    }

    container.style.top = `-${currentPage * 100}%`;
}

document.addEventListener('wheel', changePage);

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    navbar.addEventListener("mouseenter", function() {
        navbar.style.opacity = "1"; // Define a opacidade para 1 quando o mouse entra na área da barra de navegação
    });

    navbar.addEventListener("mouseleave", function() {
        navbar.style.opacity = "0.5"; // Define a opacidade para 0.5 quando o mouse sai da área da barra de navegação
    });
});
