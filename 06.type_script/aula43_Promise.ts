/*async function buscarUsuario(id: number): Promise<Usuario5> {
    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE id = $1",
        [id]
    )

    return resultado.rows[0]
}*/

//promise é o tipo que representa um resultado que ainda não está disponível, mas vai estar no futuro