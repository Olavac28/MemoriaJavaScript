function carro(cor, ano) { //atributos colocados no método construtor
    let peso; //variavel privada

    this.acelerar = function() { //forma de criar um função dentro de um objeto
        console.log('Vrummm!');
    }

    this.setPeso = function(p) { //método set
        if(peso > 0)
            peso = p;
        else
            console.log('peso invalido');
    }

    this.getPeso = function() { //método get
        return peso;
    }
}

let uno = new carro; //cria o objeto uno do tipo carro
uno.acelerar();
/*uno.peso = 1245; //nn fazer isso
console.log(uno.peso);*/

let sandeiro = new carro('branco', 2020); //cria objeto com o método construtor

let outro = [ //vetor
    new carro,
    new carro
]

function cria(c, a) {
    outro.push(new carro(c, a))
}

cria("preto", 2024);
cria();

console.table(outro);