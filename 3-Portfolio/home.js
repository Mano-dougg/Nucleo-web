
let botaoMenu = document.querySelector(".cunu");
let hamMenu = document.querySelector(".hamdiv");
let cuno = document.querySelector(".xis")

document.addEventListener("DOMContentLoaded", function() {
    hamMenu.style.visibility = "hidden";
    hamMenu.style.height = "0";
});
function clickMenu(event) {

    event.preventDefault();
    if (hamMenu.style.visibility === "hidden") {
        hamMenu.style.visibility = "visible";
        hamMenu.style.height = "100%";
        botaoMenu.style.display = "none";
    } else{
        // hamMenu.style.visibility = "hidden";
        // hamMenu.style.height = "0";
    }
}

function clickXis(event){
    event.preventDefault();
    hamMenu.style.visibility = "hidden";
    hamMenu.style.height = "0";
    botaoMenu.style.display = "";
    
  

}
    

botaoMenu.onclick = clickMenu;
cuno.onclick = clickXis
