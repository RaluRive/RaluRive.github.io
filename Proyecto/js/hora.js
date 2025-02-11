function ponerFecha() {
    let fecha= new Date();
    let nuevafecha=fecha.toISOString();
    nuevafecha=nuevafecha.split("T");
    nuevafecha[1]=nuevafecha[1].split(".")[0];
    nuevafecha[0]=nuevafecha[0].split("-");
    nuevafecha[1]=nuevafecha[1].split(":");
    document.getElementById("fecha").textContent=nuevafecha[0][2]+"/"+nuevafecha[0][1]+"/"+nuevafecha[0][0];
    document.getElementById("fecha").textContent+="  -  "+(Number.parseInt(nuevafecha[1][0])+1)+":"+nuevafecha[1][1]+":"+nuevafecha[1][2]
    
}
ponerFecha();
setInterval(ponerFecha,1000);