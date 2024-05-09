// Selecione a seção modal
const modal = document.getElementById('share-modal');
const modalButton = document.getElementById('share');

// Adicione um ouvinte de evento de clique à seção modal
modalButton.addEventListener('click', () => {
    // Verifique se a classe da seção modal é "visible"
    if (modal.classList.contains('visible')) {
        // Se sim, troque para "hidden"
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    } else {
        // Se não, troque para "visible"
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    }
});
