export class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}