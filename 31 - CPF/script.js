const cpf = document.querySelector('#id-cpf');
const texto = document.querySelector('p');

cpf.value;

function criarTexto(){
    texto.innerHTML = cpf.value;
}

cpf.addEventListener('input', function(){
    criarTexto(this.value);
});

criarTexto(cpf.value);