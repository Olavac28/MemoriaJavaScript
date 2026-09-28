function mostrarId3(id: string & number) {
    //console.log(id.toUppercase()); //ainda nn funciona
}

type Usuario2 = {
    nome: string;
    email: string;
};

type Permissoes = {
    podeEditar: boolean;
    podeExcluir: boolean;
};

type UsuarioAdmin = Usuario2 & Permissoes; //pode combinar tipos

const admin: UsuarioAdmin = {
    nome: "sla",
    email: "sla@email.com",
    podeEditar: true,
    podeExcluir: true
};