// CONSTANTES
const DIR_IMG = "img/";
const JUEGO_FPS = 60;
const VIDAS = 3;
const MAXVEL=30;
let POSX_INICIAL;
let POSY_INICIAL;
let finalizar = VIDAS;
let micanvas;
let contexto;
let partida;
let puntos = 0;
let velocidad = 3;
let intervalo;

window.mobileAndTabletCheck = function () {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

let contExplosion = 0;
let explosionBucle = (asteroide) => {
	contExplosion++;
	if (contExplosion == 4) {
		limpiar();
		actualizarFondo();
		asteroide.dibujar();
	}
}

const fondo = new Image();
fondo.src = "./img/fondo.jpg";

const explosion = new Image();
explosion.src = "./img/explosion.png";

const iniciox = 0;
let inicioy = 0;

function actualizarFondo() {
	let finy = "";
	contexto.drawImage(fondo, iniciox, inicioy);
	if (finalizar != 0) {
		if (velocidad < 10) {
			inicioy += Math.floor(velocidad - 1);
		} else {
			inicioy += 8;
		}
	}
	if (inicioy >= 0) {
		finy = (inicioy - fondo.height);
		contexto.drawImage(fondo, iniciox, finy, 600, 478);
	}
	if (finy >= 0) {
		inicioy = 0;
	}

}

window.onload = function () {
	micanvas = document.getElementById("espacio");
	contexto = micanvas.getContext("2d");

	if (window.mobileAndTabletCheck()) {
		micanvas.width = 380;
	}

	POSX_INICIAL = Math.round(micanvas.width / 2) - 30;
	POSY_INICIAL = micanvas.height - 60;

	let juego = new Juego();
	let asteroide = new Asteroide();
	partida = setInterval(juego.correr, 1000 / JUEGO_FPS, juego.nave, juego.manejadornave, asteroide);
};

class ManejadorDeEventos {
	constructor(nave) {
		this.nave = nave;
		this.e = "";
	}
	mover() {
		switch (this.e.key) {
			case "a":
				this.nave.moverIzquierda();
				break;

			case "d":
				this.nave.moverDerecha();
				break;

			case "s":
				this.nave.moverAbajo();
				break;

			case "w":
				this.nave.moverArriba();
				break;
		}
		return 0;
	}
}

class Nave {
	constructor() {
		this.posx = new Number(POSX_INICIAL);
		this.posy = new Number(POSY_INICIAL);
		this.figura = new Image();
		this.figura.src = `${DIR_IMG}viper.png`;
	}
	dibujar() {
		var x = this.posx;
		var y = this.posy;
		if (isNaN(x) || isNaN(y)) {
			x = Math.rint(LARGO / 2);
			y = ALTO + 15;
		}
		contexto.drawImage(this.figura, x, y, 60, 60);
	};
	moverArriba() {
		this.posy -= 15;
		this.comprobacionPared()
	};
	moverAbajo() {
		this.posy += 15;
		this.comprobacionPared()
	};
	moverIzquierda() {
		this.posx -= 15;
		this.comprobacionPared()
	};
	moverDerecha() {
		this.posx += 15;
		this.comprobacionPared()
	};
	comprobacionPared() {
		if (this.posy < 0) {
			this.posy = 0;
		}
		if (this.posy + 60 > micanvas.height) {
			this.posy = micanvas.height - 60;
		}
		if (this.posx < 0) {
			this.posx = 0;
		}
		if (this.posx + 60 > micanvas.width) {
			this.posx = micanvas.width - 60;
		}
	}
}

function limpiar() {
	micanvas.width = micanvas.width;
}

class Juego {
	constructor() {
		this.nave = new Nave();
		this.manejadornave = new ManejadorDeEventos(this.nave);
		window.addEventListener("keydown", (e) => {
			this.manejadornave.e = e;
		})
	}
	correr(nave, evento, asteroide) {
		evento.mover();
		limpiar();
		actualizarFondo();
		nave.dibujar();
		evento.e = "";
		asteroide.mover();
		asteroide.dibujar();
		asteroide.comprobacion(nave);
		if (finalizar == 0) {
			clearInterval(partida);
			limpiar();
			actualizarFondo();
			asteroide.dibujar();
			contexto.drawImage(explosion, nave.posx - 10, nave.posy - 10, 70, 70);
			setInterval(explosionBucle, 500, asteroide);
			alert("Fin del juego");
		} else {
			document.getElementById("puntos").innerText = `Puntos: ${puntos}`;
			document.getElementById("velocidad").innerText = `Velocidad: ${velocidad}`;
		}
	}
}

class Asteroide {
	constructor() {
		this.posx = (Math.floor(Math.random() * (micanvas.width - 40))) + 20;
		this.posy = 20;
		this.radio = 20;
	}
	mover() {
		this.posy += velocidad;
		this.comprobacionSuelo();
	}
	dibujar() {
		contexto.arc(this.posx, this.posy, this.radio, 0, Math.PI * 2);
		contexto.fillStyle = 'brown';
		contexto.fill();
	}
	comprobacionSuelo() {
		if (this.posy > (micanvas.height + (this.radio * 5.5))) {
			this.posx = Math.floor(Math.random() * micanvas.width);
			this.posy = 0;
			puntos++;
			if (velocidad<MAXVEL) {
				velocidad += 0.5;
			}
		}
	}
	comprobacion(nave) {
		if ((this.posx + 20) > (nave.posx + 5)) {
			if ((this.posx - 20) < (nave.posx + 55)) {
				if ((this.posy + 20) > (nave.posy + 5)) {
					if ((this.posy - 20) < (nave.posy + 55)) {
						finalizar--;
						document.getElementById("vidas").innerText = `Vidas: ${finalizar}`;
						if (finalizar != 0) {
							this.posx = Math.floor(Math.random() * micanvas.width);
							this.posy = 0;
						}
					}
				}
			}
		}
	}
}

function moverBoton(boton) {
	let evento = new KeyboardEvent("keydown", { key: boton });
	intervalo = setInterval(() => {
		window.dispatchEvent(evento);
	}, 1000 / JUEGO_FPS, evento);
}
function detenerBoton() {
	clearInterval(intervalo);
}
