const btn = document.querySelector('.modal-btn');
const socialIcons = document.querySelector('.social-icons');

function closeSocialIcons() {
    socialIcons.style.display = 'none';
}

function openSocialIcons() {
    socialIcons.style.display =  'block';
}

addEventListener('click', (e) => {
    const el = e.target.parentElement;
    if (el === btn) {
        openSocialIcons();
    } else {
        closeSocialIcons();
    }
    
})

