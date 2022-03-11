// 10.03.2022


// let arr = ['Alex', 'Dlaer', 'Davlat']

// let findings = arr.filter(item => item === 'Alex')

// console.log(findings);

// arr.includes('Daler')

// console.log(inc);

// let arr = [
//     {
//         name: ' apple',
//         price: 15000
//     },
//     {
//         name: 'mandarin',
//         price: 20000
//     },
//     {
//         name: ' Avokado',
//         price: 80000
//     },
//     {
//         name: 'banana',
//         price: 17000
//     },
//     {
//         name: 'snickers',
//         price: 5000
//     },
//     {
//         name: 'tedy',
//         price: 600000
//     },
//     {
//         name: ' Abrikos',
//         price: 5000
//     },
//     {
//         name: ' Ayva',
//         price: 600000
//     },
//     {
//         name: ' Ariko',
//         price: 600000
//     },
//     {
//         name: ' Arbuz',
//         price: 600000
//     },
//     {
//         name: ' AMIR',
//         price: NaN
//     },
// ]


//  let chapest = arr.filter(item => item.price <= 20000)

// console.log(chapest);


// let aPr = arr.filter(item => item.name.trim()[0] === 'A' || item.name.trim()[0] === 'a')

// console.log(aPr);


// let searchingPr = prompt('Введите продукт').trim().toLowerCase()

// // console.log(arr.find(item => item.name.trim().toLowercase() === searchingPr));

// console.log(arr.filter(item => {
//     item.name = item.name.trim().toLowerCase()

//     if (item.name.includes(searchingPr)) {
//         console.log(item);
//     }
// }));


// let arr_num = [1, 2, 3, 4]

// let total = arr_num.reduce((prev,item) => prev + item )

// arr_num.filter(item => total += item)

// console.log(total);


let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    }, {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]

let a = {
    count: 0,
    arr: []
};

let b = {
    count: 0,
    arr: []
}


arr.filter(item => {
    if (item.completed === true) {
        a.arr.push(item)
    } else if (item.completed === false) {
        b.arr.push(item)
    }
})

console.log(a, b);