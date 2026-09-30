/*
    Generics permitem criar funções, tipos, interfaces 
    e classes que trabalham com diferentes tipos, mantendo a tipagem;
    A ideia principal é: em vez de definir o tipo agora, você deixa o 
    TypeScript definir depois sem interferir na segurança do código
*/

function mostrarPrimeiro<T>(array: T[]): T {
    return array[0];
}

console.log(mostrarPrimeiro([1, 2, 3]));
console.log(mostrarPrimeiro(["1", "2", "3"]));

//tbm pode ser assim
interface Resposta<T> {
    sucesso: boolean;
    dados: T;
};