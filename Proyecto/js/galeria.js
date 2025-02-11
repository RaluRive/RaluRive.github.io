function moverDerecha() {
    if (document.getElementById("main").classList.contains("final")) {
        document.getElementById("main").classList.remove("final");
    }else{
        if (document.getElementById("main").classList.contains("medio")) {
            document.getElementById("main").classList.remove("medio");
            document.getElementById("main").classList.add("final");
        }else{
            document.getElementById("main").classList.add("medio");
        }
    }
    clearInterval(intervalo);
    intervalo=setInterval(moverDerecha,10000);
}

function moverIzquierda() {
    if (document.getElementById("main").classList.contains("final")) {
        document.getElementById("main").classList.remove("final");
        document.getElementById("main").classList.add("medio");
    }else{
        if (document.getElementById("main").classList.contains("medio")) {
            document.getElementById("main").classList.remove("medio");
        }else{
            document.getElementById("main").classList.add("final");
        }
    }
    clearInterval(intervalo);
    intervalo=setInterval(moverDerecha,10000);
}

let intervalo=setInterval(moverDerecha,10000);
document.getElementById("derecha").addEventListener("click",moverDerecha);
document.getElementById("derecha").addEventListener("keydown",moverDerecha);
document.getElementById("derecha").textContent=">";
document.getElementById("izquierda").addEventListener("click",moverIzquierda);
document.getElementById("derecha").addEventListener("keydown",moverIzquierda);
document.getElementById("izquierda").textContent="<";

document.querySelectorAll(".menu__list__item")[3].addEventListener("click",()=>{
    location.href='./nosotros.html';
});