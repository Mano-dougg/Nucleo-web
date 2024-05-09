const botao = document.getElementById('botaoShare');

function abreMenu(event) {

    if (event.type === 'touchstart')
        event.preventDefault();

    const share = document.getElementById('compartilhar');
    share.classList.toggle('ativo');

    const ativou = share.classList.contains('ativo');
    event.currentTarget.setAttribute('aria-expanded', ativou);
    
    if(ativou) {
        event.currentTarget.setAttribute('aria-label', '"fecha opções de compartilhamento"');
    } else {
        event.currentTarget.setAttribute('aria-label', '"abre opções de compartilhamento"')
    }
}

botao.addEventListener('click', abreMenu);
botao.addEventListener('touchstart', abreMenu);