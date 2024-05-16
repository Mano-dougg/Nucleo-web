const botao = document.getElementById('hamburguer');

function abreMenu(event) {

    if (event.type === 'touchstart')
        event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('ativo');
}

botao.addEventListener('click', abreMenu);
botao.addEventListener('touchstart', abreMenu);