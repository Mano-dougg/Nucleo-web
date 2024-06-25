let iconBar = document.querySelector(".icon-bar");
let share = document.querySelector("#share-symbol");

share.addEventListener("click", showSocials);

function showSocials() {
  iconBar.classList.toggle('show');
  this.classList.toggle('clicked');
}
