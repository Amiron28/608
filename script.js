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



if (Math.max(num) > Math.max(str) || Math.max(num) > Math.max(bool)) {
    console.log(num + 'больше');
} else if (Math.max(str) > Math.max(num) || Math.max(str) > Math.max(bool)) {
    console.log(str + 'больше');
} else if (Math.max(bool) > Math.max(num) || Math.max(bool) > Math.max(str)) {
    console.log(bool + 'больше');
}


console.log(
    Math.max(num.length, str.length, bool.length)
);