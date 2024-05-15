document.addEventListener("DOMContentLoaded", function() {
    var BotaoShare = document.getElementById("share");
    var RedesSociais = document.getElementById("id-dropup");
    
    BotaoShare.addEventListener("click", function(menu) {
        menu.stopPropagation();
        RedesSociais.style.display = RedesSociais.style.display === "flex" ? "none" : "flex";
    });
    document.addEventListener("click", function() {
        RedesSociais.style.display = "none"; 
    });
    RedesSociais.addEventListener("click", function(menu) {
        menu.stopPropagation();
    });
});
