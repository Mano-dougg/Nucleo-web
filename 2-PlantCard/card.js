const btn = window.document.querySelector(".share");
const icons = window.document.querySelector(".icons")

btn.addEventListener('click', function(){
    if(icons.style.opacity === '0') {
        icons.style.opacity = '1';
    }else{
        icons.style.opacity = '0';
    }
});
