window.addEventListener("DOMContentLoaded", () => {

    // ========= 船 =========
    const river = document.querySelector(".river");
    const ships = document.querySelector(".ships");

    if (river && ships) {

        // 無限ループ用にコピー
        [...ships.children].forEach(item => {
            ships.appendChild(item.cloneNode(true));
        });

        let position = 0;
        const speed = 0.5;

        let isDragging = false;
        let startX = 0;

        function moveShips() {

            if (!isDragging) {
                position += speed;
            }

            if (position >= ships.scrollWidth / 2) {
                position = 0;
            }

            if (position < 0) {
                position = ships.scrollWidth / 2;
            }

            ships.style.transform =
                `translate3d(${-position}px,0,0)`;

            requestAnimationFrame(moveShips);

        }

        moveShips();

        // PC
        river.addEventListener("mousedown", (e) => {

            isDragging = true;
            startX = e.clientX;
            river.classList.add("dragging");

        });

        window.addEventListener("mouseup", () => {

            isDragging = false;
            river.classList.remove("dragging");

        });

        window.addEventListener("mousemove", (e) => {

            if (!isDragging) return;

            position -= (e.clientX - startX);

            startX = e.clientX;

        });

        // スマホ
        river.addEventListener("touchstart", (e) => {

            isDragging = true;
            startX = e.touches[0].clientX;

        });

        river.addEventListener("touchmove", (e) => {

            if (!isDragging) return;

            position -= (e.touches[0].clientX - startX);

            startX = e.touches[0].clientX;

        });

        river.addEventListener("touchend", () => {

            isDragging = false;

        });

    }

    // ========= ハンバーガー =========

    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", () => {

            menuBtn.classList.toggle("active");
            menu.classList.toggle("open");

        });

    }

});