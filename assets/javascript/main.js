'use strict';


// Home - Carrossel
const slides = document.querySelector(".slides");
const imagens = document.querySelectorAll(".slides img");

const botaoAnterior = document.getElementById("botaoanterior");
const botaoProximo = document.getElementById("botaoproximo");

let indiceAtual = 0;

function atualizarCarrossel() {
    slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

botaoProximo.addEventListener("click", () => {
    indiceAtual++;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    atualizarCarrossel();
});

botaoAnterior.addEventListener("click", () => {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }

    console.log(indiceAtual);

    atualizarCarrossel();
});