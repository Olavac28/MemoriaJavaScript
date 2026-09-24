let nome: string = 'Joãosinho';
//            somente essa é string
let palavra1, palavra2: string;
//as duas são string
let palavra3: string, palavra4: string;

let numero: number; //inteiros e decimais

let ativo: boolean;

let n2: bigint; //inteiro muito grande

let usuario: null = null; //ausencia intencional de valor

let valor: undefined = undefined; //sem valor definido
function buscarUsuario(id: number): string | undefined {
    if (id === 1) {
        return "ok";
    }

    return undefined;
}

function mostrarMensagem(): void { //sem retorno
    console.log("Olá!");
}

function erro(mensagem: string): never { //função que sempre retorna um erro
    throw new Error(mensagem);
}