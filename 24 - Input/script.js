const nome = document.querySelector('#inputNome');
const mostrar = document.querySelector('#btnEnviar');

mostrar.addEventListener('click', function(){
    nome.value;
    alert('Nome completo: ' + nome.value);
});