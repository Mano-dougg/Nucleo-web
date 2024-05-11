let menuEscondido = document.getElementsByClassName("menuEscondido")[0];
menuEscondido.addEventListener('click', mostrarMenu);
function mostrarMenu() {
    if (menuEscondido.style.visibility === 'hidden') {
        menuEscondido.style.visibility = 'visible';
    } else {
        menuEscondido.style.visibility = 'hidden';
    }
}