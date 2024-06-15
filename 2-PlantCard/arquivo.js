var btn = document.querySelector('#mostrar');
var div = document.querySelector('.menu');

btn.addEventListener('click', function() {
    if(div.style.display === 'block'){
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
});