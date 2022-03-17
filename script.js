
// let user = {
//     name: 'Amir',
//     surname: 'Nazarov',
//     age: 15,
//     isMarried: true,
//     hairColor: 'orange'
// }

// let money = {
//     auto: 30000,
//     food: 50000,
//     friends: 100000,
//     hairColor: 'red',
//     expenses: [
//         {
//             house: 100000
//         }
//     ]
// }


// let assign = Object.assign(user, money)
// let values = Object.values(assign)


// let num = []
// let str = []
// let bool = []


// let filter = values.filter(item => {
//     if (typeof (item) === 'number') {
//         num.push(item)
//     } else if (typeof (item) === 'string') {
//         str.push(item)
//     } else if (typeof (item) === 'boolean') {
//         bool.push(item)
//     }
// })

// console.log(num, str, bool);


// if (Math.max(num.length) > Math.max(str.length) || Math.max(num.length) > Math.max(bool.length)) {
//     console.log(num + ' больше ');
// } else if (Math.max(str.length) > Math.max(num.length) || Math.max(str.length) > Math.max(bool.length)) {
//     console.log(str + ' больше ');
// } else if (Math.max(bool.length) > Math.max(num.length) || Math.max(bool.length) > Math.max(str.length)) {
//     console.log(bool + ' больше ');
// }

/-------------------------------------------------------------------/

//17.03.2022 год

// let arr = ['Gulnaz', 'Parviz', 'Daler', 'Amir', 'Daniel', 'Davlat', 'Damir', 'Jurabek', 'Jaxongir', 'Said', 'Karina']

// let name = prompt('имя')

// for (let item of arr) {
//     if (item[0] === name) {
//         console.log(item);
//     }
// }

let discount = 20

let arr = [
    {
        id: 1,
        elem: 'Bread',
        price: '5000'
    },
    {
        id: 2,
        elem: 'pizza',
        price: '50000'
    },
    {
        id: 3,
        elem: 'water',
        price: '10000'
    },
    {
        id: 4,
        elem: 'meat',
        price: '80000'
    },
    {
        id: 5,
        elem: 'egs',
        price: '35000'
    },
    {
        id: 6,
        elem: 'rolton',
        price: '5000'
    },
    {
        id: 7,
        elem: 'maslo',
        price: '18000'
    },
    {
        id: 8,
        elem: 'ramyon',
        price: '22000'
    },
    {
        id: 9,
        elem: 'tvorog',
        price: '7000'
    },
    {
        id: 10,
        elem: 'vodka',
        price: '10000'
    }
]


for (let item of arr) {
    item.price = Number

    item.price === item.price - (discount * item.price / 100)
        console.log(item.price);
    }

