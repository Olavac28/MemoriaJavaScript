let objeto1 = {}; //cria um objeto vazio
objeto1.nome = "Celular Ultra Mega"; //cria um novo campo "nome" para o objeto
objeto1.preco = 8900;
objeto1["desconto à vista"] = 10; //cria campo com o nome com mais liberdade; nn é uma boa prática
console.log(objeto1);

let objeto2 = { //cria um objeto, agora nn vazio
    nome: "Camisa polo", //usar : e ,
    preco: 89.90,
    objeto3: { //encadeamento de objetos
        campo1: 1,
        campo2: 2
    }
};
console.table(objeto2); //printa em uma tabela

let {nome, preco} = objeto2; //let nome = objeto2.nome; let preco = objeto2.preco; usar quando é para pegar mais de 1 campo
console.log(nome + preco);

let arrayObjetos = [ //cria um array de objetos
    {
        nome: "Ana",
        idade: 20
    },
    {
        nome: "João",
        idade: 10
    }
];
arrayObjetos.push({
    nome: "Pedro",
    idade: 25
});
console.log(arrayObjetos);

let a = {nome: "Sla"};
let b = a; //funciona como um ponteiro
console.log(b);