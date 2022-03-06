// let a = 10
// let b = 20
// let c = a + b
// let d = c ** 2
// let e = c / 3
// let f = e % 2
// let g = f === 0
// let h = g + b
// let j = typeof(h) + 2
// let k = j - 4

// console.log(k);


// concat


// let name = 'Alex'
// let surname = 'Adams'
// let age = 15


// //конкатинация
// console.log('Hellow world my name is ' + name + ' ' + surname + ' ' + age + ' I would like married and I am study at scholl number 33 my brothers name is Nazar my mothers name is Lola my fathers name is Xafiz ');

// //интерполяция 
// console.log(`Hellow world my name is ${name} ${surname}`);




// let a = 'alex'
// let b = 'Alex'


// console.log(a == b);






// let a = prompt('')

// console.log(eval(a));



// increment
// decrement






//     /
//     d / z

// let admin = 'Джон'
// let name = 'Джон'


// = 890


// let invoice = 5500
// let stock = 4200

// console.log(balance - car - food + invoice + stock)


// /////////
// console.log(admin);



// /////
// let balance = 25000

// let car = 4480
// let food




//     /
//     dz - 2


// let a = prompt()

// eval()

// console.log(eval(a));





// console.log(text.length);



// let a = 'hellow world'


// console.log(a.toUpperCase());



// let a = 'HELLOW WORLD'


// console.log(a.toLowerCase());



// let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque recusandae rerum ad voluptate ab ratione ea dolorum eum nostrum quia accusantium vitae, officiis, at aliquam, laudantium magnam similique nihil tenetur quibusdam in est quos impedit'


// console.log(text.search('m'));



// console.log(text.slice(22, 23).toUpperCase() + text.slice(4, 5));




// let a = 'aaa@bbb@ccc'

// a = a.replaceALL('@', '!', )
// console.log(a);


// let a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa exercitationem provident cupiditate at laudantium, doloremque asperiores soluta facere possimus.'


// console.log(a.split(''));


// console.log(window.location.href.split('/'));





// /d/z / 2

// let str = 'aaa@bbb@ccc'

// str = str.replace('@', '!')
// str = str.replace('@', '!')


// console.log(str);

// // //////

// let str_two = 'HELLOWORLD'

// console.log(str_two.slice(0, 1).toUpperCase() + str_two.slice(1, 5).toLocaleLowerCase() + ' ' + str_two.slice(5).toLowerCase());

// //////

// let c = 'Hello , it is HTML'

// console.log(c.slice(0, 5) + ' ' + c.slice(8, 10) + ' ' + c.slice(11, 13) + ' not JS');

// //////////

// let a = 'alex'

// console.log(a.slice(0, 1).toUpperCase() + a.slice(1, 2) + a.slice(2, 3) + a.slice(3, 4));

// ///////

// let math = Math.random().toString()

// console.log(math);

// /////////

// let text = 'Lex Luter has a big suit'

// console.log(text.slice(11, 12).toUpperCase() + text.slice(0, 1).toUpperCase() + text.slice(1, 2) + text.slice(2, 3));

// ////////




// 03.03 .2022



// alert('Hello world') //underfined

// let answer = confirm('are you 18 ?') //boolean

// console.log(answer);

// let answer = prompt('how old are you ?') //string

// console.log(answer);



// let fruit = 'apple'

// if (fruit[0].toUpperCase() + fruit.slice(1) === 'Apple') {
//     console.log('я его съем');
// } else {
//     console.log('что это такое ');
// }



// let answer = confirm('are you 18 ?')

// if (answer === true) {
//     console.log('welcome');
// } else {
//     console.log('good bye');
// }



// let answer = prompt('how old are you man ?')

// if (answer >= 18) {
//     console.log('welcome');
// } else {
//     console.log('get out');
// }


// let fruit = 'Apple Banana'

// if (fruit.includes('Apple')) {
//     console.log('good');
// } else if (fruit.includes(Banana)) {
//     console.log('ooo banana');
// }



// let fruits = 'apple banana'

// if (fruits.includes('apple') || fruits.includes('banana')) {
//     console.log('cool');
// } else {
//     console.log('bad');
// }


// || //выбирает только true

// && //выбирает только false



// let int = +prompt('what is the season')

// if (int >= 1 && int < 3 || int === 12) {
//     console.log('winter');
// } else if (int >= 3 && int < 6) {
//     console.log('spring');
// } else if (int >= 6 && int < 10) {
//     console.log('summer');
// } else if (int >= 10 && int < 12) {
//     console.log('autumn');
// } else {
//     console.log('ты не из земли');
// }


//d/z

// let name = 'Alex'
// let money = 10000
// let account = 7777
// let answer_1 = prompt('Ваше имя')
// let answer_2 = +prompt('Номер счета')
// let answer_3 = +prompt('Сколько обналичить ?')

// if (answer_1 === 'Alex' || answer_1 === 'alex' || answer_1 === 'алекс' || answer_1 === name) {
//     console.log('у вас подходящее имя')
//     if (answer_2 === account) {
//         console.log('верный номер счета');
//         if (answer_3 <= 10000) {
//             console.log(10000 - answer_3 + ' осталось ' + answer_3 + ' вы сняли ');
//         } else {
//             console.log('недостаточно средств');
//         }
//     } else {
//         console.log('неверный номер счета');
//     }
// } else {
//     console.log('такой пользователь не найден ');
// }

// //d/z-2

// let name_2 = prompt('Как вас зовут ?')
// let age = +prompt('Сколько вам лет ?')
// let money_2 = +prompt('Сколько у вас денег ?')
// let crowd = +prompt('Сколько вас ?')


// if (name_2.slice(0, 1) === 'A' || name_2.slice(0, 1) === 'a' || name_2.slice(0, 1) === 'а' || name_2.slice(0, 1) === 'А') {
//     console.log('вы подходите по имени');
//     if (age >= 20 && age <= 40) {
//         console.log('вы подходите по возрасту');
//         if (money_2 >= 100) {
//             console.log('у вас достаточно средств');
//             if (crowd <= 2) {
//                 console.log('проходите');
//             } else {
//                 console.log('извините места заняты');
//             }
//         } else {
//             console.log('недостаточно денег');
//         }
//     } else {
//         console.log('вы не подходите по возрасту');
//     }
// } else {
//     console.log('для начала поменяйте имя');
// }



///06.03.2022


////d/z


let a = prompt('Введите число')

if (a % 2 == 0) {
    console.log(alert('четное число'));
} else {
    console.log(alert('нечетное число'));
}


/---------------/


let name = prompt('Введите имя')

if (name.slice(0, 1) === 'A/a' || name.slice(0, 1) === 'А/а' || name === 'Alex' || name === 'alex' || name === 'Алекс' || name === 'алекс') {
    console.log(alert('проходите'));
} else {
    console.log(alert('вы не подходите по имени'));
}