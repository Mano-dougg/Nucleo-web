var botao = document.querySelector('#mostra')
var share = document.querySelector('.compar')

botao.addEventListener('click',function(){

    if(share.style.visibility === 'hidden'){
        share.style.visibility = 'visible';
    }
    else{
        share.style.visibility= 'hidden';
    }
}) 