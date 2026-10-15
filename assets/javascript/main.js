'use strict';


// Home
const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slides img').length;

let indice = 0;

setInterval(() => {
    indice = (indice + 1) % total;
    slides.style.transform = `translateX(-${indice * 100}%)`;
}, 4000);


// Contato
document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('.formulario-contato');

    if (!formulario) return;

    const campos = formulario.querySelectorAll(
        'input[required], select[required]'
    );

    campos.forEach(campo => {

        let mensagemErro = campo.nextElementSibling;

        if (
            mensagemErro &&
            mensagemErro.classList.contains('erro-msg')
        ) {

            campo.addEventListener('input', () => {

                if (campo.validity.valid) {

                    mensagemErro.style.display = 'none';

                    campo.setAttribute(
                        'aria-invalid',
                        'false'
                    );

                } else {

                    mensagemErro.style.display = 'block';

                    campo.setAttribute(
                        'aria-invalid',
                        'true'
                    );

                }

            });

        }

    });

});