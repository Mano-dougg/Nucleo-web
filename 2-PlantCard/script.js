
function showMenu(){
    const nav = document.getElementById('modal');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')){
        document.getElementById('modal_main').style.display = "flex";
    } else {
        document.getElementById('modal_main').style.display = "none";
    }

}

const botao_modal = document.getElementById("btn_modal");
botao_modal.addEventListener('click', showMenu);




