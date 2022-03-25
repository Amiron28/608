let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
    }
]

let question_1 = prompt('какое название машины')
let question_2 = +prompt('какая цена')
let question_3 = +prompt('какого года')

if (question_3 < 2010) {
    question_2 = question_2 - (question_2 * 20 / 100)
}

let add = confirm(`
    название машины: ${question_1}
    цена машины: ${question_2}
    год машины: ${question_3}

    Вы уверены что хотите добавить ${question_1}
`)

let add_machine = {
    name: question_1,
    price: question_2,
    year: question_3
}

if (add === true) {
    arr_cars.push(add_machine)
} else {
    alert('понятно')
}

console.log(arr_cars);