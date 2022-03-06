///06.03.2022


////d/z


let a = prompt('Введите число')

if (a % 2 == 0) {
    console.log(alert('четное число'));
} else {
    console.log(alert('нечетное число'));
}



let name = prompt('Введите имя')

if (name.slice(0, 1) === 'A/a' || name.slice(0, 1) === 'А/а' || name === 'Alex' || name === 'alex' || name === 'Алекс' || name === 'алекс') {
    console.log(alert('проходите'));
} else {
    console.log(alert('вы не подходите по имени'));
}