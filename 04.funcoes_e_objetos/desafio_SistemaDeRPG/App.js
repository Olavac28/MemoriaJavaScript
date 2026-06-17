import { Berserk } from "./Berserk.js";
import { Assassino } from "./Assassino.js";
import { Curandeiro } from "./Curandeiro.js";

const berserk = new Berserk('Berserk');
const assassino = new Assassino('Assassino');
const curandeiro = new Curandeiro('Curandeiro');

berserk.uparNivel(10);
assassino.uparNivel(10);

console.log('Round 1:');
berserk.atacar(assassino);
assassino.atacar(berserk);
curandeiro.atacar(berserk);

console.log('\nRound 2:');
berserk.atacar(assassino);
assassino.atacar(berserk);
curandeiro.curarAliado(assassino);

console.log('\nRound 3:');
berserk.atacar(assassino);
assassino.atacar(berserk);
curandeiro.curarAliado(assassino);

console.log('\nRound 4:');
berserk.atacar(assassino);
assassino.atacar(berserk);
curandeiro.curarAliado(assassino);

console.log('\nRound 5:');
berserk.atacar(assassino);
assassino.atacar(berserk);
curandeiro.atacar(berserk);

console.log('\nRound 5:');
berserk.atacar(curandeiro);
curandeiro.reviverAliado(assassino);
assassino.atacar(berserk);

console.log('\n');

berserk.mostrarStatus();
assassino.mostrarStatus();
curandeiro.mostrarStatus();