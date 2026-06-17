import { Pessoa } from "./Pessoa.js";

//nn da para acessar por exemplo this.#vida de uma classe herdada, tem que fazer this.getVida()

export class Curandeiro extends Pessoa {
    #curasDisponiveis = 3;
    #reviverDisponiveis = 1;

    constructor(nome) {
        super(nome);
    }

    curarAliado(aliado) {
        if(this.getVida() == 0 || aliado.getVida() == 0 || this.#curasDisponiveis < 1)
            return;

        let cura = this.getNivel() * 2 + 18;

        console.log(`${this.getNome()} usou cura, ainda restam ${this.#curasDisponiveis - 1} cura(s)`);
        aliado.curar(cura);
        this.#curasDisponiveis--;
    }

    reviverAliado(aliado) {
        if(this.getVida() == 0 || aliado.getVida() > 0 || this.#reviverDisponiveis < 1)
            return;

        let cura = this.getNivel() * 1 + 9;

        console.log(`${this.getNome()} usou reviver, ainda restam ${this.#reviverDisponiveis - 1} reviver(s)`);
        aliado.reviver(cura);
        this.#reviverDisponiveis--;
    }
}