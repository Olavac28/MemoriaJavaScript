let string = "2";
console.log(2 + Number(string)); //transforma uma string em número

console.log(Number.isInteger(2)); //verifica se é um número inteiro e retorna verdadeiro ou falso
console.log(Number.isInteger(string));

let double = 89.999999999999;
console.log(double.toFixed(2)); //mostra somente X casas decimais depois da virgula; pode arredondar o número

let transString = double.toString(); //transforma o número em uma string
console.log(transString + 2);

let n = 12;
let transBinary = n.toString(2); //transforma o número em um binário do tipo string
console.log(transBinary);
let transOct = (12).toString(8); //transforma o número para a base 8 do tipo string
console.log(transOct);