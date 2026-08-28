let nasc =  prompt ("Digite seu ano de nascimento: ");
nasc = parseINT (nasc);

let viva = confirm("Se você está viva, clique em ok.");

if (viva){
    alert(`Voce tem ${2026-nasc} anos.`)
}else{
    alert("Você morreu.");
}