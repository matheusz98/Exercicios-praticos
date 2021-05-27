/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

let resultado = document.querySelector('.texto');

function cedulas(){
    let valor = parseInt(prompt("Digite o valor: "));
    
    let notacem = parseInt(valor / 100);
    
    let notacinquenta = parseInt((valor % 100) / 50);
    
    let notavinte = parseInt(((valor%100)%50)/20);

    let notadez = parseInt((((valor%100)%50)%20)/10);

    let notacinco = parseInt(((((valor%100)%50)%20)%10)/5);

    let notadois = parseInt((((((valor%100)%50)%20)%10)%5)/2);

    let notaum = parseInt((((((valor%100)%50)%20)%10)%5)%2);

    resultado.innerHTML += `<p>${valor}</p>`;
    resultado.innerHTML += `<p>${notacem} nota(s) de R$ 100,00</p>`;
    resultado.innerHTML += `<p>${notacinquenta} nota(s) de R$ 50,00</p>`;
    resultado.innerHTML += `<p>${notavinte} nota(s) de R$ 20,00</p>`;
    resultado.innerHTML += `<p>${notadez} nota(s) de R$ 10,00</p>`;
    resultado.innerHTML += `<p>${notacinco} nota(s) de R$ 5,00</p>`;
    resultado.innerHTML += `<p>${notadois} nota(s) de R$ 2,00</p>`;
    resultado.innerHTML += `<p>${notaum} nota(s) de R$ 1,00</p>`;
}

cedulas();