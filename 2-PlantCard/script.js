const btn = document.getElementById('share');

function toggleMenu(event){

    if (event.type==='touchstart') event.preventDefault();
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    const active = menu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label','Abrir Menu')
    }
}

btn.addEventListener('click', toggleMenu);
btn.addEventListener('touchstart', toggleMenu);
