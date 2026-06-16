import { Pessoa } from "./Pessoa.js";

const p1 = new Pessoa('Player1');
const p2 = new Pessoa('Player2');

p1.uparNivel(1);
p1.atacar(p2);

p2.mostrarStatus();