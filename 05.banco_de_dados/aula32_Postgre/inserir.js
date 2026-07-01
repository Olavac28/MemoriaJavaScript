//provavelmente vai dar um erro, mas nn impede o programa de funcionar

import pool from "./database.js";

async function criarTabela() {
    try {
        await pool.query(`
            CREATE TABLE usuarios (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                idade INTEGER
            );`
        );
    }
    catch(erro) {
        console.error(erro);
    }
}

async function inserirUsuario(nome, idade) {
    try {
        await pool.query(`
            INSERT INTO usuarios(nome, idade) VALUES ($1, $2);`,
            [nome, idade]
        );
    }
    catch(erro) {
        console.error(erro);
    }
}

async function main() { //para nn inserir antes de criar
    await criarTabela();
    await inserirUsuario('João', 19);

    await pool.end();
}

main();