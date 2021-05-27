/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/

let resultado = document.querySelector('.texto');

function bhaskara(){
    let a = parseFloat(prompt("Valor A: "));
    let b = parseFloat(prompt("Valor B: "));
    let c = parseFloat(prompt("Valor C: "));

    let delta = b * b - 4 * a * c;

    if (a == 0 || delta < 0 || delta / 0){
        resultado.innerHTML = `Impossível calcular`
    } else {
        let r1 = (-b + Math.sqrt(delta)) / (2 * a);
        let r2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado.innerHTML += `R1 = ${r1.toFixed(5)}`;
        resultado.innerHTML += `R2 = ${r2.toFixed(5)}`;
    }
}

bhaskara();