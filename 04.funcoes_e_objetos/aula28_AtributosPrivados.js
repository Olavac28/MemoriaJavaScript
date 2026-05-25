class Pessoa {
    #nome;
    #idade;

    constructor(nome) {
        this.#nome = nome;
    }

    setIdade(idade) {
        this.#idade = idade;
    }

    mostrarNomeEIdade() {
        console.log(`Nome: ${this.#nome} \nIdade: ${this.#idade}`);
    }
}

const pessoa = new Pessoa('Ana');
pessoa.setIdade(15);
pessoa.idade = 25; //nn funciona
pessoa.mostrarNomeEIdade();