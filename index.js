let form = document.forms.register
let inputs = form.querySelectorAll('input')

let patterns = {
    Name: /^[a-z ,.'-]+$/i,
    Surname: /^[a-z ,.'-]+$/i,
    Email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    Password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
}

function validate(filed, regex) {
    if (regex.test(filed.value)) {
        filed.classList.add('valid')
        filed.classList.remove('invalid')
    } else {
        filed.classList.add('invalid')
        filed.classList.remove('valid')
    }
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, patterns[inp.name])
    }
})

form.onsubmit = (event) => {
    event.preventDefault()

    let arr = []

    inputs.forEach(inp => {
        if (inp.classList.value === 'invalid' || inp.value.length === 0) {
            arr.push(1)
        }
    })

    if (arr.length === 0) {
        submit()
    } else {
        alert('error')
    }
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}