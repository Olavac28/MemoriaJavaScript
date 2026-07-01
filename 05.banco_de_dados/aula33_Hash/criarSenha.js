import bcrypt from 'bcrypt';

let senha = 'minhaSenha'

const saltRounds = 10; //10-12 é o padrão seguro

let hash = await bcrypt.hash(senha, saltRounds) //é uma função asssíncrona

console.log('Hash: ' + hash);