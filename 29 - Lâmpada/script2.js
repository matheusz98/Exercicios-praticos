const lampada = document.querySelector('img');

lampada.addEventListener('mouseover', function(){
    lampada.src = 'acesa.png'; 
});

lampada.addEventListener('mouseout', function(){
    lampada.src = 'apagada.jpg'; 
});
