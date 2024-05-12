const shareMenu = document.getElementById("share-menu")
const shareButton = document.getElementById("share-btn")
const menu = document.createElement("div")
menu.id = "share-menu"
menu.innerHTML = `
  <h3 class="overpass-text">S H A R E</h3>
  <a href="#" class="share-link">
    <img src="./public/images/facebook-icon.svg" alt="Share on Facebook" class="share-icon">
  </a>
  <a href="#" class="share-link">
    <img src="./public/images/twitter-icon.svg" alt="Share on X, former Twitter" class="share-icon">
  </a>
  <a href="#" class="share-link">
    <img src="./public/images/pinterest-icon.svg" alt="Share on Pinterest" class="share-icon">
  </a>
`

const toggleShare = () => {
  const activeMenu = document.getElementById("share-menu");
  activeMenu
    ? activeMenu.remove()
    : shareButton.parentNode.insertBefore(menu, shareButton.nextSibling);
}

shareButton.addEventListener("click", toggleShare)
