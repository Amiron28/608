// let input = document.createElement('input') // создание


// input.classList.add('inp') // стилизация или присваивание каких лиюо атрибутов или текстов

// body.append(input) // вставка
// body.prepend(input) // вставка
// body.after(input) // вставка
// body.before(input) // вставка


// let div = document.createElement('div')
// let img = document.createElement('img')


// div.style.border = "2px solid #c4c4c4"
// div.style.width = "300px"
// div.style.height = "600px"
// div.style.padding = "20px"
// div.style.margin = "50px auto"

// img.src = "./photo_2021-09-16_00-15-36.jpg"
// img.style.width = "100%"

// div.append(img)
// body.prepend(div)

// let arr = [
//     "Все курсы",
//     "Успейте записаться",
//     "Преподаватели",
//     "Фотографии",
//     "Бесплатный урок",
//     "Контакты",
//     "UZ"
// ]

// let header = document.createElement('header')
// let left = document.createElement('div')
// let right = document.createElement('div')
// let img = document.createElement('img')

// let button = document.createElement('button')
// let brg = document.createElement('button')

// left.classList.add('left')
// right.classList.add('right')

// img.src = "./logo.svg"
// img.alt = "logo"

// button.classList.add('blue-btn')
// button.innerHTML = "button"
// brg.innerHTML = "burger"

// for (let item of arr) {
//     let span = document.createElement('span')
//     span.innerHTML = item

//     left.append(span)
// }

// right.append(button, brg)
// left.prepend(img)
// header.append(left, right)
// body.prepend(header)


// btn.onclick = () => {

// }


// btn.addEventListener('click', () => {


// })

// let arr = [
//     {
//         id: Math.random(),
//         course: 'FRONTEND',
//         days: "Вторник-Четверг-Суббота",
//         time: 13.30 - 15.00,
//         procent: 100
//     },
//     {
//         id: Math.random(),
//         course: 'Экстримальный Арабский язык',
//         days: "Вторник-Четверг-Суббота",
//         time: 13.30 - 15.00,
//         procent: 1
//     },
// ]

// for (let item of arr) {
//     console.log(item);
// }


/-----------------------------------------------------------/


// let arr = [
//     'Все курсы',
//     'Успейте записаться',
//     'Преподаватели',
//     'Фотографии',
//     'Бесплатный урок',
//     'Контакты',
//     'UZ'
// ]

// let body = document.body

// let header = document.createElement('header')
// let left = document.createElement('div')
// let right = document.createElement('div')
// let img = document.createElement('img')
// for (let item of arr) {
//     let span = document.createElement('span')
//     span.innerHTML = item

//     left.append(span)
// }



// let button = document.createElement('button')
// let brg = document.createElement('button')

// button.innerHTML = "button"
// brg.innerHTML = "burger"

// left.classList.add('left')
// right.classList.add('right')

// img.src = "./logo.svg"
// img.alt = "logo"

// button.classList.add('btn')
// brg.classList.add('btn')

// header.append(left, right)
// body.prepend(header)
// right.append(button, brg)


// /-----------------------------------------------------------------/

let body = document.body

// for (let i = 0; i <= 5; i++) {
//     let main = document.createElement('div')
//     main.classList.add('main')
//     body.prepend(main)

//     let logo = document.createElement('span')
//     logo.classList.add('logo')
//     logo.innerHTML = "Frontend"
//     main.prepend(logo)

//     let small_text = document.createElement('span')
//     small_text.classList.add('text')
//     small_text.innerHTML = "Осталось 10 мест"
//     main.append(small_text)

//     let polzunok = document.createElement('div')
//     let fill = document.createElement('div')

//     polzunok.classList.add('rate')
//     fill.classList.add('fill')
//     main.append(polzunok)
//     polzunok.prepend(fill)

//     let arr = [
//         'Дни: Понедельник-среда-пятница',
//         'Время: 13:30-15:00',
//         'Длительность в месяцах: 4',
//         'Цена: 515 000 сум/месяц',
//         'Преподаватель: Абдурахмонов Сохиб'
//     ]

//     for (let item of arr) {
//         let span = document.createElement('span')
//         span.innerHTML = item
//         span.classList.add('addition')
//         main.append(span)

//         span.style.margin = "20px"
//     }

//     let btn = document.createElement('button')
//     btn.classList.add('btn')
//     btn.innerHTML = "Записаться"
//     main.append(btn)
// }

let container = document.createElement('div')
container.classList.add('container')
body.prepend(container)