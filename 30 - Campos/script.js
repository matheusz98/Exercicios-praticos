const nome = document.querySelector('#id-nome');
const sobrenome = document.querySelector('#id-sobrenome');
const enviar = document.querySelector('#btn-enviar');

nome.value;
sobrenome.value;

enviar.addEventListener('click', function(){
    alert(`Olá ${nome.value} ${sobrenome.value}`);
});