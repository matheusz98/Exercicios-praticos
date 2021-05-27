/*
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.
*/

let resultado = document.querySelector('.texto');

function selecao(){
    let a = parseInt(prompt("Digite o valor A: "));
    let b = parseInt(prompt("Digite o valor B: "));
    let c = parseInt(prompt("Digite o valor C: "));
    let d = parseInt(prompt("Digite o valor D: "));
    
    let somaUm = c + d;
    let somaDois = a + b;

    if(b > c && d > a && somaUm > somaDois && c && d > 0 && a % 2 == 0 ){
        resultado.innerHTML = `Valores aceitos`;
    } else {
        resultado.innerHTML = `Valores não aceitos`;
    }
}

selecao();