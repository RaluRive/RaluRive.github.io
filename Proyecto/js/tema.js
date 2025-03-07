function cambiarTema() {
    if (localStorage.getItem("tema") == "oscuro") {
        let ruta = document.getElementById("tema").getAttribute("href");
        if (!ruta.includes("-dark.css")) {
            ruta = ruta.split(".css");
            ruta = ruta[0] + "-dark.css";
            document.getElementById("tema").setAttribute("href", ruta);
        }
    } else {
        let ruta = document.getElementById("tema").getAttribute("href");
        if (ruta.includes("-dark.css")) {
            ruta = ruta.split("-dark.css");
            ruta = ruta[0] + ".css";
            document.getElementById("tema").setAttribute("href", ruta);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === null) {
        localStorage.setItem("tema", "oscuro");
        cambiarTema();
    } else {
        cambiarTema();
        document.querySelectorAll(".fa-circle-half-stroke").forEach(element => {
            element.addEventListener("click", () => {
                if (localStorage.getItem("tema") == "oscuro") {
                    localStorage.setItem("tema", "claro");
                    cambiarTema();
                } else {
                    localStorage.setItem("tema", "oscuro");
                    cambiarTema();
                }
            })
        });
    }
})