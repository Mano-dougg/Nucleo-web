let hamMenu = document.getElementById('hambcontainer');
let botaoMenu = document.getElementById('imagem4');

function clickMenu() {
    if (hamMenu.style.visibility === "hidden") {
        hamMenu.style.visibility = "visible";
        setTimeout(() => {
            hamMenu.style.opacity = "1";
        }, 10);
    } else {
        hamMenu.style.opacity = "0";
        setTimeout(() => {
            hamMenu.style.visibility = "hidden";
        }, 500);
    }
}
    

hamMenu.style.visibility = "hidden"
// botaoMenu.addEventListener("click", clickMenu);
botaoMenu.onclick = clickMenu
