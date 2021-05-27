/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

let resultado = document.querySelector('.texto');

function distancia(){
    let x1 = parseFloat(prompt("Digite o valor x1: "));
    let x2 = parseFloat(prompt("Digite o valor x2: "));
    let y1 = parseFloat(prompt("Digite o valor y1: "));
    let y2 = parseFloat(prompt("Digite o valor y2: "));

    let calculo = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2 - y1), 2));

    resultado.innerHTML = `${calculo.toFixed(4)}`;
}

distancia();