/*
    Interface cria um contrato com a classe ou objeto,
    ela mostra o que deve ter neles,
    no caso demonstrado se a classe não tiver o nome por exemplo, o ts vai apontar um erro
*/

interface Pessoa4 {
    nome: string;
    idade: number;

    apresentar(): void;
}

class Usuario3 implements Pessoa4 {
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

//nesse caso nn precisa do type
interface Algo {
    nome: string;
    algo: string;
}

const coisa: Algo = {
    nome: "nalgo",
    algo: "oglan"
}