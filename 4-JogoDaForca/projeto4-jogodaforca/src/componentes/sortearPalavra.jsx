function sortearPalavra(){
    // pegar texto
    var texto = document.getElementById("texto_sorteio").value;

    //verificar se não digitou nada
    if (texto.trim() === "") {
        alert("Ops! Você esqueceu de digitar seu texto antes de sortear a palavra, tente novamente! :)");
        return;
    }

    //separar as palavras
    var palavras = texto.split(" ");

    // escolher um index aleatorio =  palavra sorteada
    var index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
}

document.addEventListener("DOMContentLoaded", function() {
    var btn_sortear = document.getElementById("btn_sortear");
    var palavra_sorteada= document.getElementById("resultado");
    
    btn_sortear.addEventListener("click", function() {
        var palavraEscolhida = sortearPalavra();
        if (palavraEscolhida) {
            palavra_sorteada.textContent = palavraEscolhida;
        }
    });
});
