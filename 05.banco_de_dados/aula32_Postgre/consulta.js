import pool from "./database.js";

async function listarUsuarios() {
    try {
        const resultado = await pool.query('SELECT * FROM usuarios'); //transforma em objeto

        console.log(resultado.rows); //exibe todas as linhas
    }
    catch(erro) {
        console.error(erro);
    }
}

listarUsuarios();