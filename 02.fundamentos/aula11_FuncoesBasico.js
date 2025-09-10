imprimiSoma(1, 2);
console.log(soma(3, 5));

function imprimiSoma(a, b) {
    console.log(a + b);
}

function soma(a, b) {
    return a + b;
}

let funcaoArrow = (a, b) => a + b; //retorna o valor de a + b
console.log(funcaoArrow(5, 5));