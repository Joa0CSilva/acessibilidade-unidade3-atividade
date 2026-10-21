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

    const campos = formulario.querySelectorAll('input[required], select[required]');

    const resumoErros = document.getElementById('resumo-erros');

    function validarCampo(campo) {

        const idErro = campo.getAttribute('aria-describedby');

        const mensagemErro = document.getElementById(idErro);

        if (campo.validity.valid) {

            campo.setAttribute(
                'aria-invalid',
                'false'
            );

            if (mensagemErro) {
                mensagemErro.style.display = 'none';
            }

            return true;
        }

        campo.setAttribute(
            'aria-invalid',
            'true'
        );

        if (mensagemErro) {
            mensagemErro.style.display = 'block';
        }

        return false;
    }

    campos.forEach(campo => {

        // Validação ao perder o foco
        campo.addEventListener('blur', () => {
            validarCampo(campo);
        });

        // Remove o erro enquanto corrige
        campo.addEventListener('input', () => {
            validarCampo(campo);
        });
    });

    formulario.addEventListener('submit', (evento) => {

        let erros = [];

        campos.forEach(campo => {

            const valido = validarCampo(campo);

            if (!valido) {

                const label =
                    campo.previousElementSibling
                        ?.textContent ||
                    campo.name ||
                    campo.id;

                erros.push({
                    id: campo.id,
                    nome: label
                });
            }
        });

        if (erros.length > 0) {

            evento.preventDefault();

            resumoErros.innerHTML = `
                <h2>Foram encontrados erros:</h2>
                <ul>
                    ${erros.map(erro => `
                        <li>
                            <a href="#${erro.id}">
                                Corrigir campo: ${erro.nome}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            `;

            resumoErros.style.display = 'block';
            resumoErros.setAttribute(
                'role',
                'alert'
            );

        } else {

            resumoErros.innerHTML = '';
            resumoErros.style.display = 'none';
        }
    });

});