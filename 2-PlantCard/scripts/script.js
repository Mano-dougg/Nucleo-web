function show() {
	const span = document.querySelector("span")
	span.classList.toggle("menu");
	span.classList.toggle("menu_off");
}

const button = document.querySelector(".share")
button.addEventListener("click" , show)
