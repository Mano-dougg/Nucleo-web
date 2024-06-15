Para entener meu código, se faz necessário buscar por:

head.jsx
App.jsx
App.css

O primeiro descreve o cabeçalho e garante o funcionamento do menu hamburguer, utilizando uma div que surge a partir do click no botão

O segundo contém a alma do html, peço perdão pela falta de uso da componentização, quando aprendi meu código estava bastante avançado

O css contém a formatação para tudo que ocorre no código = 

Esse trecho descreve o funcionamento do botão dark and light e é um pouco mais complexo:


.checkbox {
    opacity: 0;
  }

label.env {
    width: 40px;
    height: 14px;
    background-color: #d3d3d3;
    border-radius: 50px;
    border: 1px solid #3C3B3A;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
    top:-66px;
    left:80%;
  }
  div.bola {
    width: 18px;
    height: 20px;
    top: 2.36px;
    left: 3px;
    gap: 0px;
    Opacity: 0px;
    background-color: #3C3B3A;
    border-radius: 50%;
    position: absolute;
    transition: transform 250ms linear;
  }

.checkbox:checked + .env .bola {
    transform: translateX(26px);
  }

A seção dois possui uma estrutura que é duplicada em funcionamento, com mudanças apenas no posicionamento