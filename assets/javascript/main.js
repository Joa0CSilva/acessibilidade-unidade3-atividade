'use strict';

const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slides img').length;

let indice = 0;

setInterval(() => {
    indice = (indice + 1) % total;
    slides.style.transform = `translateX(-${indice * 100}%)`;
}, 4000);