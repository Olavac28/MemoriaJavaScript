let id: string | number; //id pode ser uma string ou um número
id = "abcd";
id = 123;

function mostrarId(id: string | number) {
    //console.log(id.toUppercase()); //da erro, nn existe essa função para number
}

function mostrarId2(id: string | number) {
    if(typeof id === "string") //agora funciona
        console.log(id.toUpperCase());
    else
        console.log(id.toFixed(2));
}

type Usuario = {
    nome: string,
    funcao: "frontend" | "backend" //define valores permitidos
}

const pessoa: Usuario = {
    nome: "João",
    funcao: "backend"
}

//cria um tipo novo que mistura alguns tipos
//evita repetição
type ID = string | number;
let algo: ID = "string";