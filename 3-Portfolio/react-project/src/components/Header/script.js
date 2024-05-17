const toggle = document.getElementById('toggle')

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})






/*function menuShow(){
    let menu = document.querySelector('.menuMobile')

    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        document.querySelector('.icon').src = './public/menuclosed.svg';
    } else {
        menu.classList.add('open')
        document.querySelector('.icon').src = './public/menuopen.svg';
    }
}

export default menuShow;*/