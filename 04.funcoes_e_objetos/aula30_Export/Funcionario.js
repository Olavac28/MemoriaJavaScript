import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    constructor(nome, cargo) {
        super(nome);
        this.cargo = cargo;
    }
}