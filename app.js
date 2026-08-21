var nasc = 2009;
let nome = "Elias";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert (`Dentro de Função - Idade ${idade}`);
    return idade;
}

calcIdade();
alert (`Fora da Funcao : chamado calcIdade ${calcIdade(2027)}`);