// 10.03.2022


let arr = [
    {
        name: ' apple',
        price: 15000
    },
    {
        name: 'mandarin',
        price: 20000
    },
    {
        name: ' Avokado',
        price: 80000
    },
    {
        name: 'banana',
        price: 17000
    },
    {
        name: 'snickers',
        price: 5000
    },
    {
        name: 'tedy',
        price: 600000
    },
    {
        name: ' Abrikos',
        price: 5000
    },
    {
        name: ' Ayva',
        price: 600000
    },
    {
        name: ' Ariko',
        price: 600000
    },
    {
        name: ' Arbuz',
        price: 600000
    },
    {
        name: ' AMIR',
        price: NaN
    },
]

let aPr = arr.filter(item => item.name.trim()[0] === 'A' || item.name.trim()[0] === 'a')

console.log(aPr);

let searchingPr = prompt('Введите продукт')

console.log(arr[searchingPr]);

