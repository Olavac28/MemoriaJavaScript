import { Pessoa } from "./Pessoa.js";

export class Berserk extends Pessoa{
    constructor(nome) {
        super(nome);

        this.calcularVidaMax();
        this.setVida(150);
    }

    calcularVidaMax() {
        this.setVidaMax(this.getNivel() * 15 + 135);
    }

    atacar(inimigo) {
        if(this.getVida() == 0)
            return;

        let dano = (1 * this.getNivel() + 9) + Math.floor((this.getVidaMax() - this.getVida()) / 10);

        inimigo.receberDano(dano);
        console.log(`${this.getNome()} atacou ${inimigo.getNome()} e causou ${dano} de dano`);

        if(inimigo.getVida() == 0)
            console.log(`${inimigo.getNome()} morreu`);
    }
}