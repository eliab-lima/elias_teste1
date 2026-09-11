let f = 1;
const imagem = document.getElementById("foto");

function proximo(e){
    e.preventDefault();
    if (f < 6){
        f = f + 1;
    }
    imagem.setAttribute("src", `./img/foto${f}.jpg`);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", proximo);

function anterior(e){
    e.preventDefault();
    if(f>1){
        f = f - 1;
    }
    imagem.setAttribute("src", `./img/foto${f}.jpg`);
}

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior)