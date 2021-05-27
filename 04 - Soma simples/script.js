let resultado = document.querySelector('.texto');

function soma(){
    let numeroUm = parseInt(prompt("Digite o primeiro valor: "));
    let numeroDois = parseInt(prompt("Digite o segundo valor: "));
    let somaResultado = numeroUm + numeroDois;

    resultado.innerHTML = `<p>SOMA = ${somaResultado}`;
}

soma();