let todos = [
    {
        "id": 1,
        "task": "купить дом на марсе",
        "status": true,
        "time": "10:10"
    },
    {
        "id": 2,
        "task": "купить дом на марсе",
        "status": true,
        "time": "10:10"
    }
]

let form = document.forms.addTask

form.onsubmit = (event) => {
    event.preventDefault()

    let task = {
        id: Math.random(),
        status: false,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    todos.push(task);
    reload(todos)
}
let container = document.querySelector('.container')

let reload = (arr) => {
    container.innerHTML = ""

    for (let item of arr) {
        let div = document.createElement('div')
        let b = document.createElement('b')
        let span = document.createElement('span')

        div.classList.add('item')
        b.innerHTML = item.task
        span.innerHTML = item.time


        div.append(b, span)
        container.append(div)
    }
}

reload(todos)