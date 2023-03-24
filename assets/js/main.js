// MOBILE NAV 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggler'),
      navClose = document.getElementById('nav-close')

// MOSTRAR MENU
/* Validando se a constante exite */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show')
    })
}

// REMOVER MENU 
/* Validando se a constante exite */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show')
    })
}


// ABOUT 
const about = document.getElementById('about') 
const aboutContainer = document.getElementById('about-me')
const sair = document.getElementById('sair')

if(about){
    about.addEventListener('click', ()=> {
        aboutContainer.classList.add('mostrar-about')
    })
}

if(sair)  {
    sair.addEventListener('click', ()=> {
        aboutContainer.classList.remove('mostrar-about')
    })
}
// REMOVE MENU MOBILE NO CLICK
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// MUDAR COR DO FUNDO DO HEADER
function scrollUp(){
    const header = document.querySelector('.header');
    if(this.scrollY >= 50) {
        header.classList.add('mudar-cor');
    } else {
        header.classList.remove('mudar-cor');
    }
}

window.addEventListener('scroll', scrollUp)



// FAZER O BUTTON UP APARECER
function scrollbtn(){
    const scrollUp = document.getElementById('btn-up');
    if(this.scrollY >= 200) scrollUp.classList.add('mostrar-scroll'); else scrollUp.classList.remove('mostrar-scroll')
}
window.addEventListener('scroll', scrollbtn)

// VALIDAR FORMULÁRIO
const submit = document.getElementById('submit')
submit.addEventListener('click', validar);
//  Submit vai ter o evento de click e uma função de callback função->validar

function validar (e) {  
    const nome = document.getElementById('input-nome');
    const email = document.getElementById('input-email');
    const erro = document.getElementById('erro');

   if(nome.value === '' || nome.value == null) {
    e.preventDefault();
    erro.classList.add('erro-visivel')
    erro.innerHTML = 'O nome é obrigatório !';
   } 
   
  if(email.value === '' || email.value == null) {
    e.preventDefault();
    erro.classList.add('erro-visivel')
    erro.innerHTML = 'O Email está vazio!';
  } 

  return true;
}



// SCROLL ANIMAÇÕES 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home_titulo , .home_img , .home_title , .home_description , .home_img2, .home_descricao , .t-titulo , .t-descricao , .home_button `,{interval: 100})
sr.reveal(`.habilidade_subtitulo, .habilidade_titulo, .marca_icon  , .t-img , .input_contato` ,{interval: 100})
sr.reveal(`.liguaguem_card, .contato_titulo , .contato_subtitulo , .trabalho_subtitulo, .trabalho_titulo `,{origin: 'left'})
sr.reveal(`.contato_button, .email `,{origin: 'right'})







/*=============== DARK LIGHT TEMA ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-moon' // icone lua

// Seleção previa do tema
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bxs-moon'

// Validar o tema selecionado
if (selectedTheme) {
// Muda o icone 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Ativar / desativar o tema pelo click
themeButton.addEventListener('click', () => {
    // Add ou remove o dark tema / icone theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvar o tema escolhido
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})