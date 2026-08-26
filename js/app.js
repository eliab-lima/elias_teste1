var nasc = 2009;
/*Pode ser reatribuida e redeclarada, além de vazar a variavel, ignorando o limite do escopo daquela variavel criada */
let nome = "Elias";
/*Let: Não pode ser redeclarado */
const viva = true;
/*const, Não pode ser reatribuida ou redeclarado */

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = true;
    }
    else{
        menor = false;
        var podebeber = false;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\nPode beber: ${podebeber}`)
    return idade;
/*O (LET) não pode ser vazado, caso esteja dentro do bloco, só irar funcionar até onde tem o scopo (Scopo: O alcanse das linhas a onde o codigo pode ser utilizado).
Já o Var, ele pode ser vazado, então mesmo dentro de um bloco, ele funciona fora do limite do scopo, */
}

calcIdade();
/*Var 'vaza' a variavel dentro do escopo da mesma funcao
alert (`Pode beber: ${podebeber}´); */
/*alert (`Fora da funcao: Idade ${idade}´);
Erro pois a variavel let não existe fora do escopo, ou seja, pra funcionar, precisa esta dentro do escopo (Limite de onde chega aquela variavel) */
alert (`Pode beber:  ${podebeber}`);