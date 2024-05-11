const shareButton = document.getElementById("share-btn")
const shareMenu = document.getElementById("share-menu")

const toggleShare = () => {
  shareMenu.classList.toggle("active")
}

shareButton.addEventListener("click", toggleShare)
