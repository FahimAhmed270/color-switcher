document.querySelector('.switcher-btn').onclick=()=>{
    document.querySelector('.color-switcher').classList.toggle('active');
}

let themeButton = document.querySelectorAll('.theme-button');
themeButton.forEach(color=>{
    color.addEventListener('click',()=>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    })
})