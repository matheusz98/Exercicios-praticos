/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/

let resultado = document.querySelector('.texto');

function diferenca(){
    let a = parseInt(prompt("Digite o valor A: "));
    let b = parseInt(prompt("Digite o valor B: "));
    let c = parseInt(prompt("Digite o valor C: "));
    let d = parseInt(prompt("Digite o valor D: "));

    let calculo = (a * b) - (c * d);

    resultado.innerHTML = `<p>DIFERENÇA = ${calculo}</p>`;
}

diferenca();