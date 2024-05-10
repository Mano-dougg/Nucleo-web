function expandirCompartilhamentoDesktop(){
    var div1 = document.getElementById('compartilhamento');
    var div2 = document.getElementById('autor');
    if(div1.style.display == 'none'){
        div1.style.display = 'block';
        div2.style.marginTop = '0px';
    } else {
        div2.style.marginTop = '133px';
        div1.style.display = 'none';
    }
}
function expandirCompartilhamentoMobile(){
    var div1 = document.getElementById('compartilhamento');
    var div2 = document.getElementById('autor');
    if(div1.style.display == 'none'){
        div1.style.display = 'block';
        div2.style.marginTop = '0px';
    } else {
        div2.style.marginTop = '88px';
        div1.style.display = 'none';
    }
}
function expandirCompartilhamento(){
    var div3 = document.getElementById('card');
    var check = div3.style.maxWidth <= 450;
    if(check){
        expandirCompartilhamentoMobile();
    } else {
        expandirCompartilhamentoDesktop();
    }
}