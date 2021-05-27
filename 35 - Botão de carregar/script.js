const button = document.querySelector('#botao');
const texto = document.querySelector('#resultado');

button.addEventListener('click', function(){
    window.onload(texto.innerHTML = 'Esse texto foi inserido pelo JavaScript...');
});