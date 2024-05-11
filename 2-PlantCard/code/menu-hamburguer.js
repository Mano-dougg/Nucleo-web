function abrirMenu(){
    const menuHamburguer = document.querySelector('.menu-hamburguer');

    if (menuHamburguer.style.display === 'none') {
        menuHamburguer.style.display = 'flex'; 
    } else {
        menuHamburguer.style.display = 'none'; 
    }
}