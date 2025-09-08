console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3, 4, 5, 6));

function somar() {
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i];
    }

    return soma;
}