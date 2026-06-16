let pai = {attr1:'a'};
let filho = {
    __proto__: pai, //pega a heança do pai
    attr2: 'b'
};

console.log(filho.attr1);

class PAI {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }

    digaOSobrenome() {
        console.log('Meu sobrenome é ' + this.sobrenome);
    }
}

class FILHO extends PAI { //msm coisa só que em classes
    constructor(sobrenome) {
        super(sobrenome); //acessa a classe PAI
    }
}

let João = new FILHO('Costa');
João.digaOSobrenome();