import { Pessoa } from "./Pessoa.js";

//nn da para acessar por exemplo this.#vida de uma classe herdada, tem que fazer this.getVida()

export class Curandeiro extends Pessoa {
    constructor(nome) {
        super(nome);
    }

    curarAliado(aliado) {
        if(this.getVida() == 0 || aliado.getVida() == 0)
            return;

        let cura = this.getNivel() * 2 + 18;

        console.log(this.getNome() + ' usou cura');
        aliado.curar(cura);
    }

    reviverAliado(aliado) {
        if(this.getVida() == 0 || aliado.getVida() > 0)
            return;

        let cura = this.getNivel() * 1 + 9;

        console.log(this.getNome() + ' usou reviver');
        aliado.reviver(cura);
    }
}