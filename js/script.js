window.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            menu.classList.toggle("open");
        });
    }

});