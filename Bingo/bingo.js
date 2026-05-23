
let listaNumeros = Array(90);
let numerosSacados= Array();
let numerosRandomizados;
let empezado=false;
for (let i = 0; i < listaNumeros.length; i++) {
    listaNumeros[i] = i + 1;
}
function sacarNumero() {
    if (numerosRandomizados.length>0) {
        let sacado=numerosRandomizados.shift();
        document.getElementById(sacado).style.backgroundColor="#ff0000"
        numerosSacados.push(sacado);
        document.getElementById("sacado").innerHTML=sacado;
        if (!empezado) {
            document.getElementById("numerosSacados").innerHTML+=sacado;
            document.getElementById("numerosSacados").style.border="1px solid black";
            empezado=true;
        }else{
            document.getElementById("numerosSacados").innerHTML+=`, ${sacado}`;
        }
        
    }else{
        alert("No quedan mas numeros");
    }
}

function randomizarArray(array) {
    let arrayDesordenado=Array();
    for (let i = 0; i < 90; i++) {
        let index=Math.round(Math.random()*array.length-1);      
        arrayDesordenado.push(array.splice(index,1)[0]);
    }
    return arrayDesordenado;
}

document.addEventListener("DOMContentLoaded", () => {
    let tabla = document.getElementById("tabla");
    document.getElementById("botonJuego").addEventListener("click", sacarNumero)
    listaNumeros.forEach(numero => {
        let cuadro = document.createElement("div")
        cuadro.innerText = numero;
        cuadro.classList.add("numero");
        cuadro.id=numero;
        tabla.append(cuadro);
    });
    numerosRandomizados = randomizarArray(listaNumeros);
})
