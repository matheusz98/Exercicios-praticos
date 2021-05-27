/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

let resultado = document.querySelector('.texto');

function maiorNumero(){
    let a = parseInt(prompt("Digite o primeiro valor: "));
    let b = parseFloat(prompt("Digite o segundo valor: "));
    let c = parseFloat(prompt("Digite o terceiro valor: "));

    let maior = Math.max(a, b, c);
    resultado.innerHTML = `${maior} é o maior`;
}

maiorNumero();