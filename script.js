
let user = {
    name: 'Amir',
    surname: 'Nazarov',
    age: 15,
    isMarried: true,
    hairColor: 'orange'
}

let money = {
    auto: 30000,
    food: 50000,
    friends: 100000,
    hairColor: 'red',
    expenses: [
        {
            house: 100000
        }
    ]
}


let assign = Object.assign(user, money)
let values = Object.values(assign)


let num = []
let str = []
let bool = []


let filter = values.filter(item => {
    if (typeof (item) === 'number') {
        num.push(item)
    } else if (typeof (item) === 'string') {
        str.push(item)
    } else if (typeof (item) === 'boolean') {
        bool.push(item)
    }
})

console.log(num, str, bool);


if (Math.max(num.length) > Math.max(str.length) || Math.max(num.length) > Math.max(bool.length)) {
    console.log(num + ' больше ');
} else if (Math.max(str.length) > Math.max(num.length) || Math.max(str.length) > Math.max(bool.length)) {
    console.log(str + ' больше ');
} else if (Math.max(bool.length) > Math.max(num.length) || Math.max(bool.length) > Math.max(str.length)) {
    console.log(bool + ' больше ');
}

