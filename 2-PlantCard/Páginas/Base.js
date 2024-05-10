var botao = document.querySelector('#mostra')
var share = document.querySelector('.compar')
var cp = document.querySelector('.corpo')
var btt = document.querySelector('#cor')

botao.addEventListener('click',function(){

    if(share.style.visibility === 'hidden'){
        share.style.visibility = 'visible';
    }
    else{
        share.style.visibility= 'hidden';
    }
}) 

btt.addEventListener('click',function(){

    if(cp.style.backgroundColor === 'rgb(188, 205, 208)'){
        cp.style.backgroundColor = 'rgb(101, 179, 7)';
    }
    else{
        cp.style.backgroundColor = 'rgb(188, 205, 208)';
    }
    
})