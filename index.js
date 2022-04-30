let input = document.querySelector('input')
let label = document.querySelector('label')

input.onkeyup = () => {
    if (+input.value === 'NaN') {
        label.innerHTML = "не пиши  цифры по братски"
        input.style.border = "2px red solid"
    } else {
        input.style.border = "2px solid green"
        label.innerHTML = ""
    }
}