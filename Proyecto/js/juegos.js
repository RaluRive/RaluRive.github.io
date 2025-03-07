document.addEventListener("DOMContentLoaded",()=>{
    let botones=document.querySelectorAll(".main__juegos>button");
    let juegos=document.querySelectorAll(".juegos__titulo");
    botones.forEach(boton => {
        boton.addEventListener("click",()=>{
            boton.parentElement.querySelector(".juegos__informacion").classList.toggle("mostrando__datos");
            boton.parentElement.querySelector(".juegos__img").classList.toggle("mostrando__datos");
            if (boton.textContent.toLowerCase()=="ver más") {
                boton.textContent="Ver Menos";
            }else{
                boton.textContent="Ver Más";
            }
        })
    });

    document.getElementById("texto__busqueda").addEventListener("input",()=>{
        juegos.forEach(juego => {
            if (document.getElementById("texto__busqueda").value && !juego.textContent.toLowerCase().includes(document.getElementById("texto__busqueda").value.toLowerCase())) {
                juego.parentElement.classList.add("invisible");
            }else{
                juego.parentElement.classList.remove("invisible");
            }
        });
    })
})