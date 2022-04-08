let discount = prompt("Какая скидка?");

let totalSale = Number;

let total = Number;

let max = Object;

let min = Object;

let average = Number;

let arr = [
    {
        name: "Milk",
        price: 3.25,
    },

    {
        name: "Coffee",
        price: 1.5,
    },

    {
        name: "Ice Cream",
        price: 7.85,
    },

    {
        name: "Tomatos",
        price: 4.14,
    },

    {
        name: "Onion",
        price: 2.25,
    },
];


// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива `arr` с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*


const setup = (arr) => {

    // Task 1 start
    max = arr.reduce((a, b) => {
        if (a.price > b.price) {
            return a
        } else {
            return b
        }
    })

    console.log(max);
    // Task 1 end

    // Task 2 start
    min = arr.reduce((a, b) => {
        if (a.price < b.price) {
            return a
        } else {
            return b
        }
    })
    console.log(min);
    // Task 2 end

    //Task 3 start
    total = 0;
    for (let item of arr) {
        total += item.price
    }

    console.log(total);
    //Task 3 end

    // Task 4 start 
    totalSale = 0;

    totalSale = Math.round(total - (total * discount / 100))

    console.log(totalSale);
    // Task 4 end
    //Task 5 start
    let arr_sale = [];

    for (let item of arr) {
        let add = {
            name: item.name,
            price: Math.round(item.price - (item.price * discount / 100))
        }

        arr_sale.push(add)
    }
    console.log(arr_sale);
    //Task 5 end

    //Task 6 start 
    for (let item of arr) {
        average = Math.round(total / 5)
    }

    console.log(average);
    //Task 6 end

};
setup(arr);
