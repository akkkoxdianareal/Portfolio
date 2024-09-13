// On Dom loaded 
window.addEventListener("DOMContentLoaded", ()=>{
    const loader = document.querySelector('.loader')
    loader.classList.add("hiden")
})
// ABOUT ME SECTION 
const interestBtn = document.querySelector('#intereses')
const aboutMeBtn  = document.querySelector('#sobremi') 
const skillsBtn   = document.querySelector('#habilidades')
const aboutContainer = document.querySelectorAll('.about-container')

function removeAbout(){
    aboutContainer.forEach( items => {
        items.classList.remove('active')
    }) 
}
// Btns
interestBtn.addEventListener('click', ()=>{
    removeAbout()
    interestBtn.classList.add('activeBtn')
    aboutMeBtn.classList.remove('activeBtn')
    let interestContainer = document.querySelector('#interest')
    interestContainer.classList.add('active')
})
aboutMeBtn.addEventListener('click', ()=>{
    removeAbout()
    aboutMeBtn.classList.add('activeBtn')
    interestBtn.classList.remove('activeBtn')
    let aboutMeContainer = document.querySelector('#about-me')
    aboutMeContainer.classList.add('active')
})
// On scroll animation
const sizeWindow1 = window.innerHeight/1.5
const sizeWindow2 = window.innerHeight/1.05
// const newNavbar = body.createElement('nav')
window.addEventListener('scroll', ()=>{
    let skills = document.querySelector('#skills')
    let innerScroll = skills.getBoundingClientRect().top;
    let js = document.querySelector('#js')
    let react = document.querySelector('#react')
    let css = document.querySelector('#css')
    let ux = document.querySelector('#ux')
    if( innerScroll < sizeWindow1){
        // document.append(newNavbar)
        js.style.animation = 'js 1.5s ease forwards'
        react.style.animation = 'react 1.5s ease forwards'
        css.style.animation = 'css 1.5s ease forwards'
        ux.style.animation = 'ux 1.5s ease forwards'
    }
    else{
        js.style.animation = ''
        react.style.animation = ''
        css.style.animation = ''
        ux.style.animation = ''
    }

})
// responsive navbar
const navbar = document.querySelector('#navbar')
const ul = navbar.querySelector('ul')
const menu = navbar.querySelector('#menu')
const closeMenu = navbar.querySelector('#closeMenu')
menu.addEventListener('click', ()=>{
    ul.classList.add('menuActive')
})
closeMenu.addEventListener('click', ()=>{
    ul.classList.remove('menuActive')
})
document.addEventListener('click',  (e)=>{
    if (!ul.contains(e.target) && e.target !== menu){
        ul.classList.remove('menuActive')
    }
})