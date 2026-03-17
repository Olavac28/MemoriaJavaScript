class Pessoa { //msm coisa da função da aula 21, mas melhorado
    constructor(nome) { //método construtor
        this.nome = nome;
    }

    getNome() { //método get
        return this.nome;
    }

    falar() { //função imbutida
        console.log('Olá');
    }
}

let p = new Pessoa('João');
p.falar();
console.log(p.getNome());