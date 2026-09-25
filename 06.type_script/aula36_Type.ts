//          precisa do =
type Pessoa = { //criar um novo tipo
    nome: string;
    idade: number;
};

const pessoa2: Pessoa = { //usar o novo tipo
    nome: 'João',
    idade: 20
};

type Pessoas = {
    nome: string;
    idade: number;
};

const pessoas2: Pessoas[] = [
    {
        nome: 'João',
        idade: 20
    },
    {
        nome: 'Maria',
        idade: 30
    }
];