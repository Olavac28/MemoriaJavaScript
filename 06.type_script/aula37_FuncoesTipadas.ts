function soma(a: number, b: number): number {
    return a + b; //tem que retornar um número
}

function soma2(a: number, b: number): number | undefined {
    return; //pode nn retornar nada ou um número
}

function mostrarMensagem(mensagem: string): void { //nn retorna
    console.log(mensagem);
}

type Pessoa = {
    nome: string;
    idade: number;
};

function criarPessoa(nome: string, idade: number): Pessoa {
    return {
        nome: nome,
        idade: idade
    };
}

function apresentar(pessoa: Pessoa): string {
    return `Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`;
}