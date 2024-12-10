
class Card {
    constructor(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
    calcularValor(puntuacion) {
        if (this.valor == "J" || this.valor == "Q" || this.valor == "K") {
            return 10;
        }
        if (this.valor == "A") {
            if ((puntuacion + 11) > 21) {
                return 1;
            } else {
                return 11;
            }
        }
        return this.valor;
    }
}

class Deck {
    constructor() {
        this.baraja = new Array();
    }
    barajar() {
        let barajaRandomizada = new Array(this.baraja.length);
        for (let i = 0; i < barajaRandomizada.length; i++) {
            barajaRandomizada[i] = this.baraja.splice(Math.floor(Math.random() * this.baraja.length), 1)[0];
        }
        this.baraja = barajaRandomizada;
    }
    inicializar() {
        let baraja = new Array();
        const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        const palos = ["picas", "diamantes", "corazones", "treboles"];
        let cont = 0;
        palos.forEach(palo => {
            valores.forEach(valor => {
                baraja[cont] = new Card(valor, palo);
                cont++;
            });
        });
        this.baraja = baraja;
    }
}

class Player {
    constructor() {
        this.mano = new Array();
        this.puntuacion = 0;
    }
    añadirCarta(carta) {
        this.mano.push(carta);
    }
    actualizarPuntuacion() {
        let puntos = 0;

        this.mano.forEach(carta => {
            if (carta.valor != "A") {
                puntos += carta.calcularValor(puntos);
            }
        });

        this.mano.forEach(carta => {
            if (carta.valor == "A") {
                puntos += carta.calcularValor(puntos);
            }
        });

        this.puntuacion = puntos;
    }
    finPartida() {
        if (this.puntuacion > 21) {
            return false;
        } else {
            return this.puntuacion;
        }
    }
    mostrarMano(dealer, jugplantado = false) {
        let texto = "";
        if (!dealer) {
            this.mano.forEach(carta => {
                //texto += carta.valor + " de " + carta.palo + "\r\n";
                switch (carta.palo) {
                    case 'picas':
                        texto += "<div width='75px' height='130px' style='border: 2px solid black;display:inline-block;border-radius: 8px; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + carta.valor + "</div><img src='img/pica.png' width='75px' height='75px' style='float:left;'><div style='text-align:right;padding:2px'>" + carta.valor + "</div></div>";
                        break;

                    case 'treboles':
                        texto += "<div width='75px' height='130px' style='border: 2px solid black;display: inline-block;border-radius: 8px; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + carta.valor + "</div><img src='img/trebol.png' width='75px' height='75px' style='float:left;'><div style='text-align:right;padding:2px'>" + carta.valor + "</div></div>";
                        break;
                    case 'diamantes':
                        texto += "<div width='75px' height='130px' style='border: 2px solid red;display: inline-block;border-radius: 8px;color:red; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + carta.valor + "</div><img src='img/diamante.png' width='75px' height='75px' style='float:left'><div style='text-align:right;padding:2px'>" + carta.valor + "</div></div>";
                        break;
                    case 'corazones':
                        texto += "<div width='75px' height='130px' style='border: 2px solid red;display: inline-block;border-radius: 8px;color:red; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + carta.valor + "</div><img src='img/corazon.png' width='75px' height='75px' style='float:left;'><div style='text-align:right;padding:2px'>" + carta.valor + "</div></div>";
                        break;
                }
            });
            if (jugplantado) {
                document.getElementById("cards-dealer").innerHTML = texto;
            } else {
                document.getElementById("cards-player").innerHTML = texto;
            }
        } else {
            switch (this.mano[0].palo) {
                case 'picas':
                    texto = "<div width='75px' height='130px' style='border: 2px solid black;display:inline-block;border-radius: 8px; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + this.mano[0].valor + "</div><img src='img/pica.png' width='75px' height='75px' style='float:left;'><div style='text-align:right;padding:2px'>" + this.mano[0].valor + "</div></div>";
                    break;

                case 'treboles':
                    texto = "<div width='75px' height='130px' style='border: 2px solid black;display: inline-block;border-radius: 8px; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + this.mano[0].valor + "</div><img src='img/trebol.png' width='75px' height='75px' style='float:left;'><div style='text-align:right;padding:2px'>" + this.mano[0].valor + "</div></div>";
                    break;
                case 'diamantes':
                    texto = "<div width='75px' height='130px' style='border: 2px solid red;display: inline-block;border-radius: 8px;color:red; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + this.mano[0].valor + "</div><img src='img/diamante.png' width='75px' height='75px' style='float:left'><div style='text-align:right;padding:2px'>" + this.mano[0].valor + "</div></div>";
                    break;
                case 'corazones':
                    texto = "<div width='75px' height='130px' style='border: 2px solid red;display: inline-block;border-radius: 8px;color:red; margin-right: 10px;'><div style='text-align:left;padding:2px'>" + this.mano[0].valor + "</div><img src='img/corazon.png' width='75px' height='75px' style='float:left;'><div style='text-align:right;padding:2px'>" + this.mano[0].valor + "</div></div>";
                    break;
            }
            document.getElementById("cards-dealer").innerHTML = texto;
        }

        return texto;
    }
}
class BlackjackGame {
    constructor(jugador, dealer, baraja) {
        this.jugador = jugador;
        this.dealer = dealer;
        this.baraja = baraja;
        this.fin = false;
    }
    inicio() {
        this.jugador.añadirCarta(this.baraja.baraja.pop());
        this.dealer.añadirCarta(this.baraja.baraja.pop());
        this.dealer.actualizarPuntuacion();
        document.getElementById("score-dealer").innerText = this.dealer.puntuacion;

        this.jugador.añadirCarta(this.baraja.baraja.pop());
        this.dealer.añadirCarta(this.baraja.baraja.pop());
        this.jugador.actualizarPuntuacion();
        this.dealer.actualizarPuntuacion();
        document.getElementById("score-player").innerText = this.jugador.puntuacion;

        this.jugador.mostrarMano(false);
        this.dealer.mostrarMano(true);

    }
    pedirCarta() {
        if (!this.fin) {
            this.jugador.añadirCarta(this.baraja.baraja.pop());
            this.jugador.actualizarPuntuacion();
            this.jugador.mostrarMano(false);

            document.getElementById("score-player").innerText = this.jugador.puntuacion;
            if (this.jugador.puntuacion > 21) {
                this.plantarse();
            }
        }
    }
    plantarse() {
        if (!this.fin) {
            this.jugador.actualizarPuntuacion();
            this.dealer.actualizarPuntuacion();
            while (this.dealer.puntuacion < 17) {
                this.dealer.añadirCarta(this.baraja.baraja.pop());
                this.dealer.actualizarPuntuacion();
            }
            document.getElementById("score-dealer").innerText = this.dealer.puntuacion;
            this.dealer.mostrarMano(false,true);
            if (this.dealer.puntuacion > 21) {
                if (this.jugador.puntuacion > 21) {
                    document.getElementById("result-player").innerText = "Has perdido";
                    document.getElementById("result-dealer").innerText = "Has ganado";
                } else {
                    document.getElementById("result-player").innerText = "Has ganado";
                    document.getElementById("result-dealer").innerText = "Has perdido";
                }
            } else {
                if (this.jugador.puntuacion > 21) {
                    document.getElementById("result-player").innerText = "Has perdido";
                    document.getElementById("result-dealer").innerText = "Has ganado";
                } else {
                    if (this.jugador.puntuacion > this.dealer.puntuacion) {
                        document.getElementById("result-player").innerText = "Has ganado";
                        document.getElementById("result-dealer").innerText = "Has perdido";
                    } else {
                        if (this.jugador.puntuacion == this.dealer.puntuacion) {
                            document.getElementById("result-player").innerText = "Empate";
                            document.getElementById("result-dealer").innerText = "Empate";
                        } else {
                            document.getElementById("result-player").innerText = "Has perdido";
                            document.getElementById("result-dealer").innerText = "Has ganado";
                        }
                    }
                }
            }
            this.fin = true;
        }
    }
}

function nuevaPartida() {
    const baraja = new Deck();
    const jugador = new Player();
    const dealer = new Player();
    baraja.inicializar();
    baraja.barajar();
    document.getElementById("cards-player").innerText = "cartas";
    document.getElementById("cards-dealer").innerText = "cartas";
    document.getElementById("score-player").innerText = "Puntuación";
    document.getElementById("score-dealer").innerText = "Puntuación";
    document.getElementById("result-player").innerText = "Resultado";
    document.getElementById("result-dealer").innerText = "Resultado";
    let partida = new BlackjackGame(jugador, dealer, baraja);
    partida.inicio();
    return partida;
}
