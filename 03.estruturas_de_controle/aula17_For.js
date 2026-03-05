let i; //pode ser dentro tbm
for(i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

let notas = [3, 5 ,7, 10, 8, 9];
for(i in notas) { //percorre todo o array; as vezes é usado o of no lugar do in
    console.log(notas[i]);
}

let pessoa = {nome:'Rogério', idade:70};
for(atr in pessoa) { //percorre todos os atributos do objeto
    console.log(atr + ' = ' + pessoa[atr]); //tem que ser em []
}

let numeros = [1, 2, 3, 4, 5];
numeros.forEach(n => { //solução mais moderna para o for each
    console.log(n);
});
