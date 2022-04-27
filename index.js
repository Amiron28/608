let oneSection = document.querySelector('.one-section')
let SpaceGrey = document.querySelector('.SpaceGrey')
let white = document.querySelector('.white')
let img = document.querySelector('.img-1')
let p4 = document.querySelector('.p4')
let btnOne = document.querySelector('.one-section')
let btnTwo = document.querySelector('.two-section')
let btnThree = document.querySelector('.three-section')
let btnFour = document.querySelector('.four-section')
let cost = document.querySelector('.cost')


SpaceGrey.onclick = () => {
    SpaceGrey.style.background = "#0071E3"
    white.style.background = "#CFE7FF"
    SpaceGrey.style.color = "#FFFFFF"
    img.setAttribute('src', './img/second-comp.png')
    p4.innerHTML = "Space Gray"
}

white.onclick = () => {
    SpaceGrey.style.background = "#CFE7FF"
    SpaceGrey.style.color = "#797979"
    white.style.background = "#0071E3"
    img.setAttribute('src', './img/apple (2).png')
    p4.innerHTML = "White"
}

btnOne.onclick = () => {
    cost.innerHTML = "$1,999"
    btnOne.style.border = 'solid blue 2px'
    btnTwo.style.border = '2px solid #CFE7FF'
    btnThree.style.border = '2px solid #CFE7FF'
    btnFour.style.border = '2px solid #CFE7FF'

}

btnTwo.onclick = () => {
    cost.innerHTML = "$2,199"
    btnTwo.style.border = 'solid blue 2px'
    btnOne.style.border = '2px solid #CFE7FF'
    btnThree.style.border = '2px solid #CFE7FF'
    btnFour.style.border = '2px solid #CFE7FF'
}

btnThree.onclick = () => {
    cost.innerHTML = "$2,599"
    btnThree.style.border = 'solid blue 2px'
    btnTwo.style.border = '2px solid #CFE7FF'
    btnOne.style.border = '2px solid #CFE7FF'
    btnFour.style.border = '2px solid #CFE7FF'

}

btnFour.onclick = () => {
    cost.innerHTML = "$3,199"
    btnFour.style.border = 'solid blue 2px'
    btnTwo.style.border = '2px solid #CFE7FF'
    btnThree.style.border = '2px solid #CFE7FF'
    btnOne.style.border = '2px solid #CFE7FF'
}