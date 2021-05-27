const valorUm = Number(document.querySelector('#numeroum'));
const valorDois = Number(document.querySelector('#numerodois'));
const soma = document.querySelector('#btn-soma');
const resultado = document.querySelector('.texto');

soma.addEventListener('click', function(){
    const calculo = valorUm + valorDois;

    resultado.innerHTML = calculo;
});