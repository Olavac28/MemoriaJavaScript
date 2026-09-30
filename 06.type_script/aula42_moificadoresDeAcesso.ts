class Pessoa8 {
    public nome: string //visto para todos
    private cpf: string //visto somente para a classe
    protected idade: number //visto pela classe e suas heranças

    constructor(nome: string, cpf: string, idade: number) {
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }

    private GetSla() {
        console.log("sla");
    }
}