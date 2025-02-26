document.addEventListener("DOMContentLoaded", () => {
    let progreso = document.querySelector("#meter");
    let tiempo = document.getElementById("tiempo");
    let consola = document.getElementById("consola");
    let video = document.getElementById("video");
    let recompensa = document.getElementById("recompensa");
    let tipo = document.getElementById("tipo");
    let numTarjeta = document.getElementById("numTarjeta");
    let codTarjeta = document.getElementById("codTarjeta");

    let tiempoError = false;
    let consolaError = false;
    let videoError = false;
    let tipoError = false;
    let numTarjetaError = false;
    let codTarjetaError = false;
    let correctas;
    document.querySelector(".form__inputs__recompensa").classList.add("invisible");

    tiempo.addEventListener("input", (event) => {
        tiempoError = tiempo.checkValidity();
        camposCompletados();
        event.target.reportValidity();
    })
    consola.addEventListener("input", (event) => {
        consolaError = consola.checkValidity();
        camposCompletados();
        event.target.reportValidity();
    })
    video.addEventListener("input", (event) => {
        videoError = video.checkValidity();
        camposCompletados();
        event.target.reportValidity();
    })
    recompensa.addEventListener("change", (event) => {
        camposCompletados();
        event.target.reportValidity();
        if (recompensa.value == "1") {
            document.querySelector(".form__inputs__recompensa").classList.remove("invisible");
        } else {
            document.querySelector(".form__inputs__recompensa").classList.add("invisible");
        }
    })
    tipo.addEventListener("input", (event) => {
        tipoError = tipo.value != "";
        camposCompletados();
        event.target.reportValidity();
    })
    numTarjeta.addEventListener("input", (event) => {
        if (recompensa.value == "1") {
            numTarjetaError = (codTarjeta.value.length >=12 && codTarjeta.value.length >=19);
        }else{
            numTarjetaError = true;
        }
        camposCompletados();
        event.target.reportValidity();
    })
    codTarjeta.addEventListener("input", (event) => {
        if (recompensa.value == "1") {
            codTarjetaError = codTarjeta.value.length == 4;
        }else{
            codTarjetaError = true;
        }
        camposCompletados();
        event.target.reportValidity();
    })

    function camposCompletados() {
        correctas = 0;
        if (recompensa.value == "1") {
            tipo.setAttribute("required",true);
            numTarjeta.setAttribute("required",true);
            codTarjeta.setAttribute("required",true);
            if (tiempoError) {
                correctas += 2;
            }
            if (consolaError) {
                correctas += 2;
            }
            if (videoError) {
                correctas += 2;
            }
            if (tipoError) {
                correctas += 2;
            }
            if (numTarjetaError) {
                numTarjeta.setCustomValidity("");
                correctas += 2;
            }else{
                numTarjeta.setCustomValidity("Debe ser un codigo de 12 a 19 digitos");
            }
            if (codTarjetaError) {
                codTarjeta.setCustomValidity("");
                correctas += 2;
            } else {
                codTarjeta.setCustomValidity("Debe ser un codigo de 4 digitos");
            }
        } else {
            tipo.removeAttribute("required");
            numTarjeta.removeAttribute("required");
            codTarjeta.removeAttribute("required");
            if (tiempoError) {
                correctas += 4;
            }
            if (consolaError) {
                correctas += 4;
            }
            if (videoError) {
                correctas += 4;
            }
        }
        progreso.value = correctas;
    }
})