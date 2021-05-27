/*
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.
*/

const texto = document.querySelector('p');

function mes(){
    const op = parseInt(prompt("Digite um número correspondente a um mês: "));

    switch(op){
        case 1:
            texto.innerHTML = 'Janeiro';
        break;

        case 2:
            texto.innerHTML = 'Fevereiro';
        break;

        case 3:
            texto.innerHTML = 'Março';
        break;

        case 4:
            texto.innerHTML = 'Abril';
        break;

        case 5:
            texto.innerHTML ='Maio';
        break;

        case 6:
            texto.innerHTML = 'Junho';
        break;

        case 7:
            texto.innerHTML = 'Julho';
        break;

        case 8:
            texto.innerHTML = 'Agosto';
        break;

        case 9:
            texto.innerHTML = 'Setembro';
        break;

        case 10:
            texto.innerHTML = 'Outubro';
        break;

        case 11:
            texto.innerHTML = 'Novembro';
        break;

        case 12:
            texto.innerHTML = 'Dezembro';
        break;

        default:
            texto.innerHTML = 'Opção inválida';
    }
}

mes();