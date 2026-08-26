var nasc = 2009;
let nome = "Elias";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
    }
    else{
        menor = false;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}`)
    return idade;

}

calcIdade();
alert (`Fora da Funcao : chamado calcIdade ${calcIdade(2027)}`);