// MENU TOGGLE
const menuToggle = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(menuId)

    if( toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })  
    }
}

menuToggle('nav-toggle', 'nav-menu')

