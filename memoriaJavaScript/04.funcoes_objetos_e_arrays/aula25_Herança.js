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

    slaOq() {
        console.log('ok');
    }
}

class FILHO extends PAI { //msm coisa só que em classes
    constructor(sobrenome) {
        super(sobrenome); //herda o construtor; nn sei como usa :(
    }
}

let João = new FILHO;
João.slaOq();