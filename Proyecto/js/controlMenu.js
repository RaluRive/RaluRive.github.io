document.addEventListener("DOMContentLoaded", () => {
    let elementos = document.querySelectorAll("body")[0].children;
    function cerrarMenu() {
        document.querySelector(".menu__icon").classList.remove("click");
        document.querySelector(".menu__list").classList.remove("click");
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].tagName != "NAV" && elementos[i].tagName != "FOOTER") {
                elementos[i].classList.remove("menu_activo");
            }
        }
    }
    document.querySelector(".menu__icon").addEventListener("click", () => {
        document.querySelector(".menu__icon").classList.toggle("click");
        document.querySelector(".menu__list").classList.toggle("click");
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].tagName != "NAV" && elementos[i].tagName != "FOOTER") {
                elementos[i].classList.toggle("menu_activo");
            }
        }
    });

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].tagName != "NAV") {
            elementos[i].addEventListener("click", cerrarMenu);
        } else {
            elementos[i].addEventListener("click", (event) => {
                if (event.target == document.querySelector(".menu")) {
                    cerrarMenu();
                    event.stopPropagation();
                }
            });
        }
    }
    window.addEventListener("resize",()=>{
        if (innerWidth>=992) {
            cerrarMenu();
        }
    },true)
})