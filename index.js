let form = document.forms.register
let block = document.querySelector('.block')
let h1 = document.querySelectorAll('h1')
let inputs = document.querySelectorAll('input')
let ok = document.querySelector('.OK')
let cansel = document.querySelector('.cansel')

console.log(ok, cansel);

form.onsubmit = (event) => {
    event.preventDefault()

    for (let item of inputs) {
        if (item.value.length > 0) {
            submit()
            item.style.border = "2px solid green"
            block.style.display = "block"

        } else {
            item.value.innerHTML = "eroor"
            block.style.display = "none"
            cansel.style.display = "block"
            ok.style.display = "block"
            item.style.border = "2px solid red"
            break
        }
    }
}

ok.onclick = () => { 
    alert('succses')
}

cansel.onclick = () => { 
    alert('понятно')
    
}

function submit() {
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