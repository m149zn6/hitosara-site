window.addEventListener("DOMContentLoaded", () => {

    // 船の流れる処理
    const ships = document.querySelector(".ships");

    if (ships) {

        const items = [...ships.children];

        items.forEach(item => {
            const clone = item.cloneNode(true);
            ships.appendChild(clone);
        });


        let position = 0;
        const speed = 0.5;


        function moveShips() {

            position += speed;

            ships.style.transform =
                `translate3d(${-position}px, 0, 0)`;


            if (position >= ships.scrollWidth / 2) {
                position = 0;
            }


            requestAnimationFrame(moveShips);
        }


        moveShips();

    }


    // ハンバーガーメニュー
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");


    if (menuBtn && menu) {

        menuBtn.addEventListener("click", () => {

            menuBtn.classList.toggle("active");
            menu.classList.toggle("open");

        });

    }

});