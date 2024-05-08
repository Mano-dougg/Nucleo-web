let share_btn = document.getElementById("share");
let curtain = document.getElementById("curtain");
let counter = 0;


function inAnim () {
    curtain.classList.remove("OutAnimation");
    curtain.classList.add("InAnimation");
 
}; 

function outAnim () {
    curtain.classList.remove("InAnimation");
    curtain.classList.add("OutAnimation");

}

function Anim() {
    if (counter % 2 == 0) {
        inAnim();
        counter++;
    } else {
        outAnim();
        counter++;
    }
}

share_btn.addEventListener("click" , Anim);

document.getElementsByTagName("img")[1].onclick = function() {
    location.href = "https://www.facebook.com";

};

document.getElementsByTagName("img")[2].onclick = function() {
    location.href = "https://www.twitter.com";

};

document.getElementsByTagName("img")[3].onclick = function() {
    location.href = "https://www.pinterest.com";

};




