function clickmenu(){
    var alt = window.innerWidth;

    if(alt > 775){

        if(compartilhado.style.display == 'block' && usuario.style.marginTop == '2.46%'){
            compartilhado.style.display = 'none'
            usuario.style.marginTop = '20%'
        } else { 
            compartilhado.style.display = 'block'
            usuario.style.marginTop = '2.46%'
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