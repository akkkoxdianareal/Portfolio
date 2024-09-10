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
// On scroll fixed navbar
const navbar = document.querySelector('#navbar')
const sizeWindow = window.innerHeight/1.6

window.addEventListener('scroll', ()=>{
    let skills = document.querySelector('#skills')
    let innerScroll = skills.getBoundingClientRect().top;
    console.log(innerScroll)
    console.log( sizeWindow)
    if( innerScroll < sizeWindow){
        let hero = document.querySelector('.hero')
        hero.style.height = '45dvh'
        navbar.style.position = 'fixed'
        navbar.style.top = 0
        navbar.style.boxshadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
    }
    else{
        navbar.style.height = '7dvh'
        navbar.style.position = 'relative'
    }
    let js = document.querySelector('#js')
    let react = document.querySelector('#react')
    let css = document.querySelector('#css')
    let html = document.querySelector('#html')
    if( innerScroll < sizeWindow){
        js.style.animation = 'js 1.5s ease forwards'
        react.style.animation = 'react 1.5s ease forwards'
        css.style.animation = 'css 1.5s ease forwards'
        html.style.animation = 'html 1.5s ease forwards'
    }
    else{
        js.style.animation = ''
        react.style.animation = ''
        css.style.animation = ''
        html.style.animation = ''
    }
})