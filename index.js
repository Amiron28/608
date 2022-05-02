// let input = document.querySelector('input')
// let label = document.querySelector('label')

// input.onkeyup = () => {
//     let a = input.value
//     let b = String(+a)

//     if(a === b){
//         input.style.border = "2px red solid"

//     }else{
//         input.style.border = "2px green solid"
//     }
// }

/------------------------------------------------------------------------------/

let form = document.forms.register
let block = document.querySelector('.block')
let h1 = document.querySelectorAll('h1')



form.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    showUser(user)
}

function showUser(data) {
    let children = h1

    for (let item of children) {
        for (let key in data) {
            if (item.getAttribute('name') == key) {
                item.innerHTML = `${key}: ${data[key]}`
            }
        }
    }

}