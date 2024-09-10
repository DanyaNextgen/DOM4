let images = document.querySelectorAll('.second-img img')
let mainImg = document.querySelector('.main-img img')

images.forEach(img => {
    img.onclick = () => {
        mainImg.setAttribute('src', img.getAttribute('src'))
    }
})

let count = 1;
let numDisplay = document.querySelector('.display');
let plusBtn = document.querySelector('.plus-btn');
let minusBtn = document.querySelector('.minus-btn');

plusBtn.onclick = () => {
    numDisplay.innerHTML = ++count
}

minusBtn.onclick = () => {
    if (count > 1) {
        numDisplay.innerHTML = --count
    }
}
