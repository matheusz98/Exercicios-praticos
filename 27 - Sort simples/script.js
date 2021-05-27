/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
*/

const resultado = document.querySelector('.texto');

function sort(){
    const a = parseInt(prompt("Digite o primeiro valor: "));
    const b = parseInt(prompt("Digite o segundo valor: "));
    const c = parseInt(prompt("Digite o terceiro valor: "));

    const numeros = [a, b, c];

    const crescente = numeros.sort();

    resultado.innerHTML += `<p>${crescente}</p>`;
    resultado.innerHTML += `<p>${a} ${b} ${c}</p>`;
}

sort();