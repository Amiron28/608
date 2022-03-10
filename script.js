//08.03/2022



console.log('Task : 1');

let cars = [car_1 = 6500, car_2 = 7000, car_3 = 20000, car_3 = 7001, car_4 = 21000, car_5 = 6000, car_6 = 100000]

let cheap = []
let expensive = []

cars.filter(item => {
    if ((item) <= '7000') {
        cheap.push(item)
    } else if ((item) > '7000') {
        expensive.push(item)
    }
})

console.log(cheap, expensive);



console.log('Task : 2');


let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let num = []
let string = []
let bool = []
let obj = []

arr.filter(item => {
    if (typeof (item) === 'number') {
        num.push(item)
    } else if (typeof (item) === 'string') {
        string.push(item)
    } else if (typeof (item) === 'boolean') {
        bool.push(item)
    } else if (typeof (item) === 'object') {
        obj.push(item)
    }
})


console.log(num, string, bool, obj);


console.log('Task : 3 and 5');

let arr_1 = [1, 3, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let numb = []
let strin = []
let boo = []
let obje = []

arr_1.filter(item => {
    if (typeof (item) === 'number') {
        numb.push(item)
    } else if (typeof (item) === 'string') {
        strin.push(item)
    } else if (typeof (item) === 'boolean') {
        boo.push(item)
    } else if (typeof (item) === 'object') {
        obje.push(item)
    }
})

if (numb.length >= 5) {
    console.log('Good');
} else {
    console.log('Bad');
}

console.log(numb);




console.log('Task : 4');

let index = +prompt();

let aray = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];

aray.splice(index, index)
console.log(aray);





