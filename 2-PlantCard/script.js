let dropdown_menu = document.getElementsByClassName('dropdown-menu')[0];
dropdown_menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (dropdown_menu.style.visibility === 'hidden') {
    dropdown_menu.style.visibility = 'visible';
  } else {
    dropdown_menu.style.visibility = 'hidden';
  }
  console.log(dropdown_menu.style);
}
