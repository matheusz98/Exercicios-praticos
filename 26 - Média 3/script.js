/*
Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

Entrada
A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

Saída
Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".
*/

const resultado = document.querySelector('.texto');

function calculo(){
    const a = parseFloat(prompt("Insira a primeira nota: "));
    const b = parseFloat(prompt("Insira a segunda nota: "));
    const c = parseFloat(prompt("Insira a terceira nota: "));
    const d = parseFloat(prompt("Insira a quarta nota: "));

    const media = (a + b + c + d) / 4;
    // calculo.toFixed(1);

    if (media >= 7.0){
        resultado.innerHTML += `<p>Média: ${media.toFixed(1)}</p>`;
        resultado.innerHTML += `<p>Aluno aprovado.</p>`;
    } else if (media < 5.0){
        resultado.innerHTML += `<p>Média: ${media.toFixed(1)}</p>`;
        resultado.innerHTML += `<p>Aluno reprovado.</p>`;
    } else {
        resultado.innerHTML += `<p>Aluno em exame.</p>`;
        const exame = parseFloat(prompt("Digite a nota do exame: "));
        resultado.innerHTML += `<p>Nota do exame: ${exame.toFixed(1)}</p>`;
        const recalculo = (exame + media) / 2;
        if (recalculo >= 5.0){
            resultado.innerHTML += `<p>Média final: ${recalculo.toFixed(1)}</p>`;
            resultado.innerHTML += `<p>Aluno aprovado.</p>`
        } else {
            resultado.innerHTML += `<p>Média final: ${recalculo.toFixed(1)}</p>`;
            resultado.innerHTML += `<p>Aluno reprovado.</p>`
        }
    }

    
}

calculo();