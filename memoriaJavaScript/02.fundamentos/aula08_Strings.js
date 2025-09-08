let escola = "escola";

//pega somente um caractere
console.log(escola.charAt(0));
console.log(escola.charAt(1));
console.log(escola.charAt(2));
console.log(escola.charAt(3));
console.log(escola.charAt(4));
console.log(escola.charAt(5));

console.log(escola.charCodeAt(0)); //pega o valor da tabela ascii de um caractere

console.log(escola.substring(1)); //retorna os caracteres a partir da posição 1
console.log(escola.substring(0, 3)); //retorna os caracteres a partir da posição 0 até a 2

/*
outras:
    .replace() //substitui alguma(s) letra(s) por outra
    .split() //transforma uma string um um array
    .toUpperCase() //letra maiuscula
    .toLowerCase() //letra minuscula
*/

let nome = "Sla";
//construção de uma string com quebra de linha
let template = `
olá
    ${nome}`; //outro jeito de concatenar variáveis
console.log(template);

//O \n funciona!