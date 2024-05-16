


// 
function mudancaShareIcons(){

    var iconsShare = document.getElementById("icons-share");
            if (!iconsShare) {
                iconsShare = document.createElement("section");
                
                iconsShare.id = "icons-share";

                //componente
                iconsShare.innerHTML = `
                    <p>SHARE</p>
                    <img src="assents/images/akar-icons_facebook-fill.png" alt="facebook">
                    <img src="assents/images/Vector.png" alt="twitter">
                    <img src="assents/images/akar-icons_pinterest-fill.png" alt="pinterest">
                `;

               var conteudoPrincipalTexto = document.querySelector(".conteudo-principal-texto");
              conteudoPrincipalTexto.insertBefore(iconsShare, conteudoPrincipalTexto.querySelector("footer"));
            } else {
                iconsShare.style.display = (iconsShare.style.display === "none" || iconsShare.style.display === "") ? "flex" : "none";
            }
    




}