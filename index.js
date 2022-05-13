let form = document.forms.addTask
let todos = []

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
        let del = document.createElement('button')
        let editeItem = document.createElement('button')


        div.classList.add('newTask')
        b.innerHTML = item.task
        span.innerHTML = item.time
        del.innerHTML = "delete"
        editeItem.innerHTML = "edite"


        div.append(b, span, del, editeItem)
        container.append(div)


        del.onclick = () => {
            arr.splice(arr.indexOf(item), 1)
            reload(todos)
        }

        editeItem.onclick = () => {
            console.log('edite');
            arr.splice(arr.indexOf(item), 1, {
                id: Math.random(),
                status: false,
                task: "edited",
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            })
            reload(todos)
        }


    }
}



reload(todos)