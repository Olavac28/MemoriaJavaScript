import { Pessoa } from "./Pessoa.js";

export class Assassino extends Pessoa {
    constructor(nome) {
        super(nome);

        this.calcularVidaMax(0);
        this.setVida(50);
    }

    calcularVidaMax(niveisUpados) {
        this.setVidaMax(this.getNivel() * 5 + 45);
        this.setVida(this.getVida() + niveisUpados * 5);
    }

    atacar(inimigo) {
        if(this.getVida() == 0)
            return;

        let dano = 3 * this.getNivel() + 27;

        inimigo.receberDano(dano);
        console.log(`${this.getNome()} atacou ${inimigo.getNome()} e causou ${dano} de dano`);

        if(inimigo.getVida() == 0)
            console.log(`${inimigo.getNome()} morreu`);
    }
}