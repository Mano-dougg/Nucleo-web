function toggleDarkMode() {
  var checkBox = document.getElementById("check");
  var htmlElement = document.documentElement;
  
  if (checkBox.checked == true){
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }
}
