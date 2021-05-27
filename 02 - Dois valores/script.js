let valorUm = document.querySelector('.valor');
let valorDois = document.querySelector('.valoor');
let textoResultado = document.querySelector('.texto');

function calculo(){
    const a = Number(prompt('Digite o primeiro valor: '));
    const b = Number(prompt('Digite o segundo valor: '));
    const x = a + b;

    valorUm.innerHTML += `<p>O primeiro valor inserido foi: ${a}</p>`;
    valorDois.innerHTML += `<p>O segundo valor inserido foi: ${b}</p>`;
    textoResultado.innerHTML += `<p>O valor da soma foi: ${x}</p>`;
}

calculo();