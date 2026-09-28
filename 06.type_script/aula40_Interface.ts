/*
    interface cria um contrato com a classe,
    ela mostra o que deve ter na classe,
    no caso demonstrado se a classe não tiver o nome por exemplo, o ts vai apontar um erro
*/

interface Pessoa {
    nome: string;
    idade: number;

    apresentar(): void;
}

class Usuario3 implements Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, eu sou ${this.nome}`);
    }
}