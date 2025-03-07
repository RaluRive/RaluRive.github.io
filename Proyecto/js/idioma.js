function recogerDatos(pagina) {
    return new Promise((resolve, reject) => {
        fetch("./json/" + pagina + "_lang.json")
            .then(response => resolve(response.json()))
            .catch(error => reject(error))
    })
}

async function cambiarIdioma(pagina) {
    let datos = Array()
    try {
        datos = await recogerDatos(pagina);
        switch (pagina) {
            case "index":
                let aside = document.querySelectorAll(".aside__div");
                let main = document.querySelectorAll(".main__div__text>div");
                let menu=document.querySelector(".menu__list").children;
                if (localStorage.getItem("idioma") == "en") {
                    for (let i = 0; i < menu.length-1; i++) {
                        if (i==4) {
                            let botones=menu.item(i).querySelectorAll(".list__div__button");
                            for (let j = 0; j < botones.length; j++) {
                                botones.item(j).textContent=datos.en.menu[i][j];
                            }
                        }else{
                            menu.item(i).textContent = datos.en.menu[i];
                        }
                    }
                    for (let i = 0; i < aside.length; i++) {
                        aside.item(i).childNodes.item(1).data = datos.en.aside[i];
                    }
                    for (let i = 0; i < main.length; i++) {
                        for (let j = 0; j < main.item(i).children.length; j++) {
                            if (j==0) {
                                main.item(i).children.item(j).textContent = datos.en.main[i].titulo;
                            }else{
                                main.item(i).children.item(j).textContent = datos.en.main[i].parrafos[j-1];
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < menu.length-1; i++) {
                        if (i==4) {
                            let botones=menu.item(i).querySelectorAll(".list__div__button");
                            for (let j = 0; j < botones.length; j++) {
                                botones.item(j).textContent=datos.es.menu[i][j];
                            }
                        }else{
                            menu.item(i).textContent = datos.es.menu[i];
                        }
                    }
                    for (let i = 0; i < aside.length; i++) {
                        aside.item(i).childNodes.item(1).data = datos.es.aside[i];
                    }
                    for (let i = 0; i < main.length; i++) {
                        for (let j = 0; j < main.item(i).children.length; j++) {
                            if (j==0) {
                                main.item(i).children.item(j).textContent = datos.es.main[i].titulo;
                            }else{
                                main.item(i).children.item(j).textContent = datos.es.main[i].parrafos[j-1];
                            }
                        }
                    }
                }
                break;
            case "registro":
                let formulario=document.querySelector(".form__inputs").children;
                let menuRegistro=document.querySelector(".menu__list").children;
                if (localStorage.getItem("idioma") == "en") {
                    for (let i = 0; i < menuRegistro.length-1; i++) {
                        if (i==4) {
                            let botones=menuRegistro.item(i).querySelectorAll(".list__div__button");
                            for (let j = 0; j < botones.length; j++) {
                                botones.item(j).textContent=datos.en.menu[i][j];
                            }
                        }else{
                            menuRegistro.item(i).textContent = datos.en.menu[i];
                        }
                    }
                    document.querySelector("#main__form>legend").textContent=datos.en.tituloFormulario;
                    for (let i = 0; i < formulario.length; i++) {
                        if (i==3) {
                            formulario.item(i).children.item(0).textContent=datos.en.formulario[i][0];
                            formulario.item(i).children.item(1).childNodes.item(0).textContent=datos.en.formulario[i][1];
                        }else{
                            if (i==7) {
                                formulario.item(i).value = datos.en.formulario[i-1];
                            }else{
                                if (i!=6) {
                                    formulario.item(i).children.item(0).textContent=datos.en.formulario[i];
                                }
                            }
                            
                        }
                    }
                }else{
                    for (let i = 0; i < menuRegistro.length-1; i++) {
                        if (i==4) {
                            let botones=menuRegistro.item(i).querySelectorAll(".list__div__button");
                            for (let j = 0; j < botones.length; j++) {
                                botones.item(j).textContent=datos.es.menu[i][j];
                            }
                        }else{
                            menuRegistro.item(i).textContent = datos.es.menu[i];
                        }
                    }
                    document.querySelector("#main__form>legend").textContent=datos.es.tituloFormulario;
                    for (let i = 0; i < formulario.length; i++) {
                        if (i==3) {
                            formulario.item(i).children.item(0).textContent=datos.es.formulario[i][0];
                            formulario.item(i).children.item(1).childNodes.item(0).textContent=datos.es.formulario[i][1];
                        }else{
                            if (i==7) {
                                formulario.item(i).value = datos.es.formulario[i-1];
                            }else{
                                if (i!=6) {
                                    formulario.item(i).children.item(0).textContent=datos.es.formulario[i];
                                }
                            }
                            
                        }
                    }
                }
                break;
            default:
                break;
        }
    } catch (error) {
        console.log("Se ha producido un error : "+error);
    }
}

if (localStorage.getItem("idioma") === null) {
    localStorage.setItem("idioma", "es");
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".fa-language").forEach(element => {
        element.addEventListener("click",()=>{
            if (localStorage.getItem("idioma") == "es") {
                localStorage.setItem("idioma", "en");
            }else{
                localStorage.setItem("idioma", "es");
            }
        })
    });
})