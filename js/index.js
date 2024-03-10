burger = document.querySelector('.nav3')
navbar = document.querySelector('.navbar')
nav1 = document.querySelector('.nav1')
img = document.querySelector('.navbar > img')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    nav1.classList.toggle('v-class');
    img.classList.toggle('z-class');
})