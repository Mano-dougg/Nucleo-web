let popupDrawer = document.getElementById("popup-drawer");


function sharePopUp() {
  if (popupDrawer.style.visibility == "hidden") {
    popupDrawer.style.visibility = "visible";
  } else {
    popupDrawer.style.visibility = "hidden";
  }
};