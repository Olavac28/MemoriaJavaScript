let b = [6, 5, 1, 3, 2, 4];
b.sort(); //ordena o vetor
console.log(b);

console.log(buscaBinaria(b, 5));

function buscaBinaria(vetor, valor) {
    let inicio = 0;
    let fim = vetor.length - 1;

    while(inicio <= fim) {
        //         deixa o numero aredondado para baixo
        let meio = Math.floor((inicio + fim) / 2);

        if(vetor[meio] == valor)
            return valor;

        if(vetor[meio] > valor)
            fim = meio - 1;
        else
            inicio = meio + 1;
    }

    return -1; //se nn encontrado
}