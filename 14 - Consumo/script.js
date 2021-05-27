/*
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".
*/

let resultado = document.querySelector('.texto');

function consumo(){
    let x = parseInt(prompt("Digite a distância total percorrida: "));
    let y = parseFloat(prompt("Digite o combustível gasto"));
    let calculo = x / y;

    resultado.innerHTML = `${calculo.toFixed(3)} km/l`;
}

consumo();