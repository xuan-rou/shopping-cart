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

// CHANGE SIZE
const sizes = document.querySelectorAll('.size__us')
const colors = document.querySelectorAll('.sneaker__color')
const sneaker = document.querySelectorAll('.sneaker__img')

function sizeChange() {
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function colorChange() {
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color')
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`)

    console.log(sneakerColor);

    // color選擇鈕切換
    colors.forEach(c => c.classList.remove('active'))
    this.classList.add('active')

    // 隨著選取顏色切換背景色
    document.documentElement.style.setProperty('--primary', primary)

    // 圖片切換
    sneaker.forEach(s => s.classList.remove('shows'))
    sneakerColor.classList.add('shows')
}

sizes.forEach(size => size.addEventListener('click', sizeChange))
colors.forEach(c => c.addEventListener('click', colorChange))


// COUNT ++--
const minus = document.querySelector('.count__minus'),
      plus = document.querySelector('.count__plus')
let quat = document.querySelector('.count__num').innerHTML

minus.addEventListener('click', function() {
    if(quat === 0) return false
    if(quat > 0) { 
        quat--
        console.log('quat--',quat);
    }

    document.querySelector('.count__num').innerHTML = `${quat}`
})

plus.addEventListener('click', function() {
    quat++
    console.log('quat++', quat);
    document.querySelector('.count__num').innerHTML = `${quat}`
})


