import { Berserk } from "./Berserk.js";
import { Curandeiro } from "./Curandeiro.js";

const p1 = new Berserk('Player1');
const p2 = new Curandeiro('Player2');

p2.uparNivel(40);
p2.atacar(p1);

p1.mostrarStatus();

p1.atacar(p2)

p2.mostrarStatus();