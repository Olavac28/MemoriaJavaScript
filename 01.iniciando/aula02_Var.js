var string = "oi "; //nn tem tipo
var n1 = 1;
var n2 = 2;
console.log(n1 % n2); //ocorreu a conta
console.log(string + n1 + n2); //tudo virou string

var n1 = 3; //var pode ser redeclarada
console.log(n1, n2); //concatena sem somar

{
    var visivel = "sim";
}
console.log(visivel); //funciona msm em outro bloco, por isso é menos convencional usar

console.log(a); //a variavel var será considerada como existente, msm que declarada a baixo, porém o resultado sera indefinido
var a = 2;

