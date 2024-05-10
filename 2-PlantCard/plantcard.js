let popupDrawer = document.getElementById("popup-drawer");
let shareButton = document.getElementById("share-btn");


function sharePopUp() {
  if (popupDrawer.style.visibility == "hidden") {
    popupDrawer.style.visibility = "visible";
    shareButton.style.backgroundColor = "rgb(55, 58, 45)";
  } else {
    popupDrawer.style.visibility = "hidden";
    shareButton.style.backgroundColor = "rgba(105, 111, 90, 1)"
  }
};
