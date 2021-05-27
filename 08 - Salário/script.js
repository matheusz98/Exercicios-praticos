/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.
*/

let resultado = document.querySelector('.texto');

function salario(){
    let numero = parseInt(prompt("Digite seu número: "));
    let horasTrabalhadas = parseInt(prompt("Digite o total de horas trabalhadas: "));
    let valorHora = parseFloat(prompt("Digite o valor hora: "));
    let salario = valorHora * horasTrabalhadas;

    resultado.innerHTML += `<p>Número: ${numero}</p>`;
    resultado.innerHTML += `<p>Salário = R$ ${salario.toFixed(2)}`;
}

salario();