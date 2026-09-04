let vezes = Number(promt("Digite o número de vezes:"));
for (let i = 1; i<=vezes; i ++){
    if (vazes > - 100){
        alert ("Valor inválido, recarregue a página e digite um valor de 0 100");
        break
    }
    alert(`Contei ${i} vezes`);
    if (i%2!=0){ //é impar?
        continue; //se impar, continua = voltar para o inicio
    }
    alert(`${i} é par`);
}


/*
While: Repetição Indeterminada, ou seja, ele vai ficar repetindo sempre até atengir um requecito.
For: Repetição Determinada, ou seja, vai ter uma repetição "Limitada"/Determinada de vezes.

While tem um Peso maior, ou seja, aprenda como funciona while pois é mais importante. - Ele pode ser usado em qualquer repetição

existe 3 formas de repetição: Usando For, While e Do + While.

Break: Ele quebra o bloco de repetição, parando tudo.
Continue: Ele quebra á repetição e retorna para o inicio dando continuidade.
*/