// let arr = [1, 2, 3, 4, 'stroka', true, {}, [], false, NaN, null, 2]

// let num = 0
// let bool = 0
// let obj = 0
// let str = 0

// for (let item of arr) {
//     if (typeof(item) === 'number') {
//         num++
//     } else if (typeof(item) === 'boolean') {
//         bool++
//     } else if (typeof(item) === 'object') {
//         obj++
//     } else if (typeof(item) === 'string') {
//         str++
//     }
// }

// console.log(num, bool, obj, str);





let moshin_bozor = [

    {
        company: 'chevrolette',
        model: 'spark',
        color: 'black',
        wheels: 3,
        priceList: {
            orgPrice: 11000,
            forCreadit: 16000,
            leezeng: 18000
        }
    },
    {
        company: 'chevrolette',
        model: 'gentra',
        color: 'wet asphalt',
        wheels: 4,
        priceList: {
            orgPrice: 14000,
            forCreadit: 20000,
            leezeng: 24000
        }
    },
    {
        company: 'chevrolette',
        model: 'cobalt',
        color: 'grey',
        wheels: 5,
        priceList: {
            orgPrice: 13000,
            forCreadit: 15000,
            leezeng: 19000
        }
    },
    {
        company: 'chevrolette',
        model: 'captiva',
        color: 'black',
        wheels: 4,
        priceList: {
            orgPrice: 28000,
            forCreadit: 34000,
            leezeng: 38000
        }
    },
    {
        company: 'bmw',
        model: 'm5',
        color: 'blue',
        wheels: 4,
        priceList: {
            orgPrice: 110000,
            forCreadit: 210000,
            leezeng: 200000
        }
    },
    {
        company: 'mrecedes',
        model: 's63',
        color: 'white',
        wheels: 4,
        priceList: {
            orgPrice: 90000,
            forCreadit: 100000,
            leezeng: 140000
        }
    },
    {
        company: 'chevrolette',
        model: 'spark',
        color: 'black',
        wheels: 3,
        priceList: {
            orgPrice: 11000,
            forCreadit: 16000,
            leezeng: 18000
        }
    },
    {
        company: 'chevrolette',
        model: 'gentra',
        color: 'wet asphalt',
        wheels: 4,
        priceList: {
            orgPrice: 14000,
            forCreadit: 20000,
            leezeng: 24000
        }
    },
    {
        company: 'chevrolette',
        model: 'cobalt',
        color: 'grey',
        wheels: 5,
        priceList: {
            orgPrice: 13000,
            forCreadit: 15000,
            leezeng: 19000
        }
    },
    {
        company: 'chevrolette',
        model: 'captiva',
        color: 'black',
        wheels: 4,
        priceList: {
            orgPrice: 28000,
            forCreadit: 34000,
            leezeng: 38000
        }
    },
    {
        company: 'bmw',
        model: 'm5',
        color: 'blue',
        wheels: 4,
        priceList: {
            orgPrice: 110000,
            forCreadit: 210000,
            leezeng: 200000
        }
    },
    {
        company: 'mrecedes',
        model: 's63',
        color: 'white',
        wheels: 4,
        priceList: {
            orgPrice: 90000,
            forCreadit: 100000,
            leezeng: 140000
        }
    },
]

let chevrollet = 0
let bmw = 0
let mrs = 0

for (let item of moshin_bozor) {
    if (item.company === 'mrecedes') {
        mrs++
    } else if (item.company === 'bmw') {
        bmw++
    } else if (item.company === 'chevrolette') [
        chevrollet++
    ]
}

let persantage_chevrollet = chevrollet * 100 / moshin_bozor.length
let persantage_bmw = bmw * 100 / moshin_bozor.length
let persantage_mrs = mrs * 100 / moshin_bozor.length

console.log(persantage_chevrollet + '%', persantage_bmw + '%', persantage_mrs + '%');