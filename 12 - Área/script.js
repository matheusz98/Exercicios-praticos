/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

let resultado = document.querySelector('.texto');

function area(){
    let a = parseFloat(prompt("Digite o valor A: "));
    let b = parseFloat(prompt("Digite o valor B: "));
    let c = parseFloat(prompt("Digite o valor C: "));

    let triangulo = (a * c) / 2;
    let circulo = 3.14159 * c ** 2;
    let trapezio = ((a + b) * c) / 2;
    let quadrado = b * b;
    let retangulo = a * b;
    
    resultado.innerHTML += `<p>TRIANGULO: ${triangulo.toFixed(3)}</p>`;
    resultado.innerHTML += `<p>CIRCULO: ${circulo.toFixed(3)}</p>`;
    resultado.innerHTML += `<p>TRAPEZIO: ${trapezio.toFixed(3)}</p>`;
    resultado.innerHTML += `<p>QUADRADO: ${quadrado.toFixed(3)}</p>`;
    resultado.innerHTML += `<p>RETANGULO: ${retangulo.toFixed(3)}</p>`;
}

area();