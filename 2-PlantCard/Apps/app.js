const botao = document.getElementById('botaoShare');

function abreMenu() {
    const share = document.getElementById('compartilhar');
    share.classList.toggle('ativo');
}

botao.addEventListener('click', abreMenu);