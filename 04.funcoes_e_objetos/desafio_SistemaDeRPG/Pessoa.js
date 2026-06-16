export class Pessoa {
    #nome;
    #nivel = 1;
    #vida = 100;
    #vidaMax = 100;

    constructor(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    getNivel() {
        return this.#nivel;
    }

    getVidaMax() {
        return this.#vidaMax;
    }

    getVida() {
        return this.#vida;
    }

    setVida(vida) {
        if(vida < 0)
            return;

        this.#vida = vida;
    }
    
    setVidaMax(vida) {
        if(vida <= 0)
            return;

        this.#vidaMax = vida;
    }

    atacar(inimigo) {
        if(this.#vida == 0)
            return;

        let dano = 1 * this.#nivel + 9;

        inimigo.receberDano(dano);
        console.log(`${this.#nome} atacou ${inimigo.getNome()} e causou ${dano} de dano`);

        if(inimigo.getVida() == 0)
            console.log(`${inimigo.getNome()} morreu`);
    }
    
    receberDano(dano) {
        this.#vida = this.#vida - dano;

        if(this.#vida <= 0)
            this.#vida = 0;
    }

    curar(cura) {
        if(this.#vida == 0)
            return;

        this.curou(cura);
    }

    reviver(cura) {
        if(this.#vida > 0)
            return;

        console.log(this.#nome + ' foi revivido');
        this.curou(cura)
    }

    curou(cura) {
        if(this.#vida + cura > this.#vidaMax)
            cura = this.#vidaMax - this.#vida;

        this.#vida = this.#vida + cura;
        console.log(this.#nome + ' recuperou ' + cura + ' de vida');
    }

    uparNivel(niveisUpados) {
        if(this.#vida == 0)
            return;

        this.#nivel = this.#nivel + niveisUpados;
        console.log(this.#nome + ' upou ' + niveisUpados + ' nivel(s)')
        //colocar o this para chamar uma função interna tbm
        this.calcularVidaMax();
    }

    calcularVidaMax() {
        this.#vidaMax = this.#nivel * 10 + 90;
    }

    mostrarStatus() {
        console.log(`---------------------------------------------------
Nome: ${this.#nome}
Nível: ${this.#nivel}
Vida Maxíma: ${this.#vidaMax}
Vida: ${this.#vida}
---------------------------------------------------`
        );
    }
}