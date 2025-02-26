document.addEventListener("DOMContentLoaded",()=>{
    let botones=document.querySelectorAll(".categorias__list>button");
    botones.forEach(boton => {
        boton.addEventListener("click",()=>{
            boton.parentElement.querySelector("p").classList.toggle("mostrando__reglas");
        })
    });
})