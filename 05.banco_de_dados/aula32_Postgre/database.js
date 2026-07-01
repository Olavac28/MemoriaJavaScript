import pkg from 'pg';
import 'dotenv/config'; //nn pode ser chamada por require pois esse codigo vai ser exportado posteriormente

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres', //nome do usuario, normalmente postgres
    host: 'localhost', //caso esteja no próprio pc
    database: 'teste', //nome do database
    password: process.env.DB_PASSWORD, //senha definida anteriormente
    port: 5432 //normalmente 5432
})

export default pool;