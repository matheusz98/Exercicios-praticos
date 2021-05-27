/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
*/

let resultado = document.querySelector('.texto');

function idade(){
    let numero = parseInt(prompt("Digite sua idade: "));
    let ano = numero / 365;
    let mes = (numero % 365) / 30;
    let dia = numero % 365 % 30;

    resultado.innerHTML += `<p>${ano.toFixed(0)} ano(s)</p>`;
    resultado.innerHTML += `<p>${mes.toFixed(0)} mes(es)</p>`;
    resultado.innerHTML += `<p>${dia.toFixed(0)} dia(s)</p>`;
}

idade();
