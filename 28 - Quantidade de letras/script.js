const nome = document.querySelector('#inputNome');
const mostrar = document.querySelector('#btnEnviar');
const resultado = document.querySelector('.texto');

mostrar.addEventListener('click', function(){
    resultado.innerHTML = `'${nome.value}' // ${nome.value.length}`;
});