let progreso=document.querySelector("#meter");
let nombre=document.getElementById("nombre");
let pais=document.getElementById("pais");
let correo=document.getElementById("correo");
let foto=document.getElementById("foto");
let contraseña=document.getElementById("pass");
let contraseñaConfirmacion=document.getElementById("passconfirm");

let nombreError=false;
let paisError=false;
let correoError=false;
let fotoError=false;
let contraseñaError=false;
let contraseñaConfirmacionError=false;
let correctas;
let patronContraseña=new RegExp(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/);

nombre.addEventListener("input",(event)=>{
    nombreError=nombre.checkValidity();
    camposCompletados();
    event.target.reportValidity();
})
pais.addEventListener("input",(event)=>{
    paisError=pais.checkValidity();
    camposCompletados();
    event.target.reportValidity();
})
correo.addEventListener("input",(event)=>{
    correo.setCustomValidity("");
    correoError=correo.checkValidity();
    camposCompletados();
    event.target.reportValidity();
})
foto.addEventListener("input",(event)=>{
    fotoError=foto.checkValidity();
    camposCompletados();
    event.target.reportValidity();
})
contraseña.addEventListener("input",(event)=>{
    contraseña.setCustomValidity("");
    contraseñaError=patronContraseña.test(contraseña.value);
    camposCompletados();
    event.target.reportValidity();
})
contraseñaConfirmacion.addEventListener("input",(event)=>{
    contraseñaConfirmacion.setCustomValidity("");
    contraseñaConfirmacionError=(contraseñaConfirmacion.value==contraseña.value);
    camposCompletados();
    event.target.reportValidity();
})

function camposCompletados() {
    correctas=0;

    if (nombreError) {
        correctas+=2;
    }
    if (paisError) {
        correctas+=2;
    }
    if (correoError) {
        correctas+=2;
    }else{
        correo.setCustomValidity("El correo no esta escrito en un formato valido");
    }
    if (fotoError) {
        correctas+=2;
    }
    if (contraseñaError) {
        correctas+=2;
    }else{
        contraseña.setCustomValidity("La contraseña no es segura");
    }
    if (contraseñaConfirmacionError) {
        correctas+=2;
    }else{
        contraseñaConfirmacion.setCustomValidity("Las contraseñas no coinciden");
    }
    progreso.value=correctas;
}