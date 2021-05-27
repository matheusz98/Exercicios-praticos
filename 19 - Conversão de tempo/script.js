/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

let resultado = document.querySelector('.texto');

function tempo(){
    let tempo = parseInt(prompt("Insira um número: "));
    let hora = tempo / 3600;
    let minuto = (tempo % 3600) / 60;
    let segundo = (tempo % 3600) % 60;

    resultado.innerHTML = `${hora.toFixed(0)}:${minuto.toFixed(0)}:${segundo.toFixed(0)}`;
}

tempo();