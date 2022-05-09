window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);

}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // Verificar se a seção passou da linha
    // Quais dados vou precisar²
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    // o topo de seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // informações dos dados e da logica
    console.log('O topo da seção chegou ou passou da linha?' ,sectionTopReachOrPassedTargetLine)

    // Verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight

    //final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    //limites da seção
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && 
    !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


function showNavOnScroll(){
    if(scrollY > 0) {
        navigation.classList.add('scroll')    
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 500) {
        backToTopButton.classList.add('show')    
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home .fotoPerfil,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);

