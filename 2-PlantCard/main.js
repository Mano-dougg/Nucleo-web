// Definição das variaveis 
var menu = document.querySelector("button.sharing-button")
var botão = document.querySelector("button.press-active")
// Definir Padrão do menu e EventListener
menu.style.display = "none"
botão.addEventListener("click", openOrclosemenu)
// Definir Evento de Clickar 
function openOrclosemenu(){
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    }
    else {
        menu.style.display = "none"
    }
}

