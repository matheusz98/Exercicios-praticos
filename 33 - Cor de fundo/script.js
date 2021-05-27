const verde = document.querySelector('#btn-verde');
const vermelho = document.querySelector('#btn-vermelho');

verde.addEventListener('click', function(){
    document.body.style.backgroundColor = "green";
});

vermelho.addEventListener('click', function(){
    document.body.style.backgroundColor = "red";
});