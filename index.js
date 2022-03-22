// let arr = [
//     {
//         id: 1,
//         elem: 'Bread',
//         price: '5000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 2,
//         elem: 'pizza',
//         price: '50000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 3,
//         elem: 'water',
//         price: '10000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 4,
//         elem: 'meat',
//         price: '80000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 5,
//         elem: 'egs',
//         price: '35000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 6,
//         elem: 'rolton',
//         price: '5000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 7,
//         elem: 'maslo',
//         price: '18000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 8,
//         elem: 'ramyon',
//         price: '22000',
//         addInfo: [
//             {
//                 a: 12
//             },
//             {
//                 b: 12
//             },
//         ]
//     },
//     {
//         id: 9,
//         elem: 'tvorog',
//         price: '7000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     },
//     {
//         id: 10,
//         elem: 'vodka',
//         price: '10000',
//         addInfo: [
//             {
//                 a: 12
//             }
//         ]
//     }
// ]

// for(let item of arr) {
//     for(let info of item.addInfo) {
//         console.log(info);
//     }
// }


// let arr = [
//     {
//         name: 'milk',
//         type: 'milk'
//     },
//     {
//         name: 'apple',
//         type: 'fruit'
//     },
//     {
//         name: 'tvorog',
//         type: 'milk'
//     },
//     {
//         name: 'vodka',
//         type: 'spirt'
//     },
//     {
//         name: 'sir',
//         type: 'moloko'
//     },
//     {
//         name: 'banana',
//         type: 'fruit'
//     },
//     {
//         name: 'watermelon',
//         type: 'fruit'
//     },
//     {
//         name: 'vine',
//         type: 'spirt'
//     },
//     {
//         name: 'samarqand',
//         type: 'spirt'
//     }
// ]

// let amount = [
//     {
//         type: 'milk',
//         count: 0
//     },
//     {
//         type: 'fruit',
//         count: 0
//     },
//     {
//         type: 'spirt',
//         count: 0
//     },
// ]

// for(let item of arr) {
//     for(let item2 of amount) {
//         if(item.type === item2.type) {
//             item2.count++
//         }
//     }    
// }


// console.log(amount);



// for(let i = 0; i <= 10; i++) {
//     document.write(`6 * ${i} = ${6 * i} <br> `);    
// }


// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         document.write(`${i} * ${k} = ${i * k} <br> `)
//     }
//     document.write(`<br>`)
// }