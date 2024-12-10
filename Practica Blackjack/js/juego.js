const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const palos = ["picas", "diamantes", "corazones", "treboles"];

class Card {
    constructor(valor, palo) {
        if (valores.find(valor) == undefined) {
            throw new Error("El valor no es correcto");
        }
        if (palos.find(palo) == undefined) {
            throw new Error("El palo no es correcto");
        }
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
let baraja = new Array();

class Deck {
    constructor(baraja) {
        this.baraja = baraja
    }
    barajar() {
        let barajaRandomizada = new Array(this.baraja.length);
        for (let i = 0; i < barajaRandomizada.length; i++) {
            barajaRandomizada[i] = this.baraja.splice(Math.floor(Math.random() * this.baraja.length), 1)[0];
        }
    }
    inicializar() {
        let baraja = new Array();
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

