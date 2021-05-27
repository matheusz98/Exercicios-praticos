/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

let resultado = document.querySelector('.texto');

function calculoPecas(){
    let codigoUm = parseInt(prompt("Digite o código da peça 1"));
    let quantidadeUm = parseInt(prompt("Digite a quantidade de peças 1: "));
    let valorUm = parseFloat(prompt("Digite o valor da peça 1: "));
    let codigoDois = parseInt(prompt("Digite o código da peça 2: "));
    let quantidadeDois = parseInt(prompt("Digite a quantidade de peças 2: "));
    let valorDois = parseFloat(prompt("Digite o valor da peça 2: "));
    let calculoUm = quantidadeUm * valorUm;
    let calculoDois = quantidadeDois * valorDois;
    let total = calculoUm + calculoDois;

    resultado.innerHTML = `VALOR A PAGAR: R$ ${total.toFixed(2)}`;
}

calculoPecas();