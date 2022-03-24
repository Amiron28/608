// console.log(arr_school);

// for (let i = 9; i >= 1; i--) {
//     for (let k = 1; k <= 3; k++) {
//         document.write(k)
//     }
//     // document.write(i)
// }

// for (let i = 5; i >= 1; i--) {
//     for (let k = 1; k <= i; k++){
//         document.write(`* `)
//     }
//         document.write(`<br>`)
// }


let arr_school = [
    {
        school: 'wepro',
        budget: 800000,
        tax: 13,
        students: 190,

        expenses: [
            {
                title: 'furniture',
                price: 2000
            },
            {
                title: 'water',
                price: 800
            },
            {
                title: 'electricity',
                price: 5000
            }
        ]
    },
    {
        school: 'Amir',
        budget: 30000000,
        tax: 0000001,
        students: 700,
        expenses: [
            {
                title: 'furniture',
                price: 90000
            },
            {
                title: 'compi',
                price: 100000
            },
            {
                title: 'electricity',
                price: 50000
            },
            {
                title: 'close',
                price: 9999
            },
            {
                title: 'svechi',
                price: 50000
            },
            {
                title: 'Amir',
                price: 1
            },
            {
                title: 'anime',
                price: 999999
            },
        ]
    },
    {

        school: 'IT',
        budget: 9999999,
        tax: 15,
        students: 100,
        expenses: [
            {
                title: 'furniture',
                price: 20000
            },
            {
                title: 'water',
                price: 1000
            },
            {
                title: 'electricity',
                price: 5000
            },
        ]
    },
    {
        school: '34',
        budget: 1500000,
        tax: 15,
        students: 3000,
        expenses: [
            {
                title: 'internet',
                price: 1500
            },
            {
                title: 'computers',
                price: 2000
            },
            {
                title: 'electricity',
                price: 8000
            }
        ]
    },
    {
        school: 51,
        budget: 800000,
        tax: 13,
        students: 2100,
        expenses: [
            {
                title: 'television',
                price: 2000
            },
            {
                title: 'comp',
                price: 4000
            },
            {
                title: 'aspalt',
                price: 2500
            }
        ]
    },
    {
        school: 'GLC',
        budget: 400000,
        tax: 13,
        students: 530,
        expenses: [
            {
                title: 'tables',
                price: 4000
            },
            {
                title: 'trips',
                price: 80000
            },
            {
                title: 'electricity',
                price: 8000
            }
        ]
    }
]

for (let item of arr_school) {
    item.totalCostOfTax = 0

    item.totalCostOfTax = Math.round(item.budget * item.tax / 100)
}

let minTax = Math.min(arr_school.totalCostOfTax)
let maxTax = Math.max(arr_school.totalCostOfTax)

console.log(minTax, maxTax);
