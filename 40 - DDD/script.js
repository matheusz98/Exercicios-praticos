/*
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:




Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.
*/

const texto = document.querySelector('p');

function ddd(){
    const op = prompt("Digite seu DDD: ");

    switch(op){
        case '51':
            texto.innerHTML = 'Rio Grande do Sul'
        break;

        case '61':
            texto.innerHTML = 'Brasília';
        break;

        case '71':
            texto.innerHTML = 'Salvador';
        break;

        case '11':
            texto.innerHTML = 'São Paulo';
        break;

        case '21':
            texto.innerHTML = 'Rio de Janeiro';
        break;

        case '32':
            texto.innerHTML = 'Juiz de Fora';
        break;

        case '19':
            texto.innerHTML = 'Campinas';
        break;

        case '27':
            texto.innerHTML = 'Vitória';
        break;

        case '31':
            texto.innerHTML = 'Belo Horizonte';
        break;

        default:
            texto.innerHTML = 'DDD não cadastrado';
    }
}

ddd();