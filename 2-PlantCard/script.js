function clickmenu(){
    var larg = window.innerWidth;

    if(larg > 775){

        if(compartilhado.style.display == 'block'){
            compartilhado.style.display = 'none'
            usuario.style.marginTop = '20%'
        } else { 
            compartilhado.style.display = 'block'
            usuario.style.marginTop = '2.48%'
        }

    } else{

        if(compartilhado.style.display == 'block'){
            compartilhado.style.display = 'none';
            usuario.style.marginTop = '16%';
            
        } else{
            compartilhado.style.display = 'block';
            usuario.style.marginTop = '5.28%';
        }
    }


}