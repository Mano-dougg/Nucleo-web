function expandirCompartilhamento(){
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