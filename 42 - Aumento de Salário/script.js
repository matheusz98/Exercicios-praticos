/*
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.


*/

const texto = document.querySelector('p');

function aumentoFuncionario(){
    let salario = parseFloat(prompt("Digite seu salário base: "));

    if (salario == 0 || salario <= 400.00){
        let reajuste = salario * 0.15;
        let aumento = salario + reajuste;
        texto.innerHTML += `<p>Novo salário: ${aumento.toFixed(2)}</p>`
        texto.innerHTML += `<p>Reajuste ganho: ${reajuste.toFixed(2)}`;
        texto.innerHTML += `<p>Em percentual: 15%</p>`;
    } else if (salario == 400.01 || salario <= 800.00){
        reajuste = salario * 0.12;
        aumento = salario + reajuste;
        texto.innerHTML += `<p>Novo salário: ${aumento.toFixed(2)}</p>`
        texto.innerHTML += `<p>Reajuste ganho: ${reajuste.toFixed(2)}`;
        texto.innerHTML += `<p>Em percentual: 12%</p>`;
    } else if (salario == 800.01 || salario <= 1200.00){
        reajuste = salario * 0.10;
        aumento = salario + reajuste;
        texto.innerHTML += `<p>Novo salário: ${aumento.toFixed(2)}</p>`
        texto.innerHTML += `<p>Reajuste ganho: ${reajuste.toFixed(2)}`;
        texto.innerHTML += `<p>Em percentual: 10%</p>`;
    } else if (salario == 1200.01 || salario <= 2000.00){
        reajuste = salario * 0.07;
        aumento = salario + reajuste;
        texto.innerHTML += `<p>Novo salário: ${aumento.toFixed(2)}</p>`
        texto.innerHTML += `<p>Reajuste ganho: ${reajuste.toFixed(2)}`;
        texto.innerHTML += `<p>Em percentual: 7%</p>`;
    } else if (salario > 2000.00){
        reajuste = salario * 0.04;
        aumento = salario + reajuste;
        texto.innerHTML += `<p>Novo salário: ${aumento.toFixed(2)}</p>`
        texto.innerHTML += `<p>Reajuste ganho: ${reajuste.toFixed(2)}`;
        texto.innerHTML += `<p>Em percentual: 4%</p>`;
    }
}

aumentoFuncionario();