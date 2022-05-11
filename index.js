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
        let btn = document.createElement('button')

        // div.classList.add('item')
        div.style.height = "120px"
        div.style.background = "#F0F0F0"
        div.style.border = "2px solid  #007FFF"
        div.style.padding = "10px"
        b.classList.add('b')
        span.classList.add('span')
        btn.classList.add('btn-done')

        b.innerHTML = item.task
        span.innerHTML = item.time
        btn.innerHTML = "Done"


        div.append(b, span, btn)
        container.append(div)


        btn.onclick = () => {

            div.classList.add('done')
        }



    }
}

reload(todos)