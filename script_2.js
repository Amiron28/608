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


// d / z

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


// let a = prompt('Введите число')

// if (a % 2 == 0) {
//     console.log(alert('четное число'));
// } else {
//     console.log(alert('нечетное число'));
// }



// let name = prompt('Введите имя')

// if (name === 'Alex' || name === 'alex' || name === 'Алекс' || name === 'алекс' || name === 'ALex' || name === 'ALEX' || name === 'АЛЕКС' || name === 'ALeX' || name === 'ALEx' || name === 'АЛЕКс') {
//     console.log(alert('проходите'));
// } else {
//     console.log(alert('вы не подходите по имени'));
// }



//08.03.2022




// let a = 'Jordan'

// if (a === 'Jordan') {
//     console.log('Hello');
// } else {
//     console.log('Bye');
// }

// if(a === 'Jordan') console.log('Hello');
// else console.log('Bye');

// a === 'Jordan' ? console.log('Hello') : console.log('Bye');


// console.log(arr.length);

// let arr = [1,'string', 55, {a: 'ss', b: 33}, ['hello', 13], true, 22, 12, false, {a: 20}, [22], [22,[[22]],22]]

// console.log(arr[0] + arr[2] + arr[3].b + arr[4][1] + arr[6] + arr[7] + arr[9].a + arr[10][0] + arr[11][0] + arr[11][1][0][0] + arr[11][2]);

// методы массивов



// методы добавления

// let arr_names = ['Gulnaz', 'Karina', 'Kaneki', 'Amir', 'Daler', 'Damir', 'Daniel']

// arr_names.push('Jurabek')//добавляет в конец
// arr_names.unshift('Jaxonigir')//добавляет в начало

// console.log(arr_names);


// //методы удаления

// arr_names.pop()//убирает самый последний элемент
// arr_names.shift()//убирает самый первый элемент

// arr_names.splice(1,1, 'Parviz')//второе число означает скольких убрать

// console.log(arr_names);


// методы поиска


// let arr_names = ['Gulnaz', 'Karina', 'Kaneki', 'Damir', 'Amir', 'Daler', 'Damir', 'Daniel', 'Damir',]

// includes()
// indexof()

// console.log(arr_names.indexOf('Daler'));
// console.log(arr_names.includes('Daler'));

// let findings = arr_names.find(item => item === 'Damir')//ищет элементы

// let findings = arr_names.filter(item => item === 'Damir')//создает массив и дает инф

// console.log(findings);





// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

// let num = []
// let string = []
// let bool = []
// let obj = []

// arr.filter(item => {
//     if (typeof (item) === 'number') {
//         num.push(item)
//     } else if (typeof (item) === 'string') {
//         string.push(item)
//     } else if (typeof (item) === 'boolean') {
//         bool.push(item)
//     } else if (typeof (item) === 'object') {
//         obj.push(item)
//     }
// })


// console.log(num, string, bool, obj);


// // 08.03/2022



// console.log('Task : 1');

// let cars = [car_1 = 6500, car_2 = 7000, car_3 = 20000, car_3 = 7001, car_4 = 21000, car_5 = 6000, car_6 = 100000]

// let cheap = []
// let expensive = []

// cars.filter(item => {
//     if ((item) <= '7000') {
//         cheap.push(item)
//     } else if ((item) > '7000') {
//         expensive.push(item)
//     }
// })

// console.log(cheap, expensive);



// console.log('Task : 2');


// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

// let num = []
// let string = []
// let bool = []
// let obj = []

// arr.filter(item => {
//     if (typeof (item) === 'number') {
//         num.push(item)
//     } else if (typeof (item) === 'string') {
//         string.push(item)
//     } else if (typeof (item) === 'boolean') {
//         bool.push(item)
//     } else if (typeof (item) === 'object') {
//         obj.push(item)
//     }
// })


// console.log(num, string, bool, obj);


// console.log('Task : 3 and 5');

// let arr_1 = [1, 3, false, 'hello', 24, 'world', undefined, null, 'error', 22]

// let numb = []
// let strin = []
// let boo = []
// let obje = []

// arr_1.filter(item => {
//     if (typeof (item) === 'number') {
//         numb.push(item)
//     } else if (typeof (item) === 'string') {
//         strin.push(item)
//     } else if (typeof (item) === 'boolean') {
//         boo.push(item)
//     } else if (typeof (item) === 'object') {
//         obje.push(item)
//     }
// })

// if (numb.length >= 5) {
//     console.log('Good');
// } else {
//     console.log('Bad');
// }

// console.log(numb);




// console.log('Task : 4');

// let index = +prompt();

// let aray = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];

// aray.splice(index, index)
// console.log(aray);



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


// console.log('Task 1');

// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     }, {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// };

// let b = {
//     count: 0,
//     arr: []
// }


// arr.filter(item => {
//     if (item.completed === true) {
//         a.arr.push(item)
//     } else if (item.completed === false) {
//         b.arr.push(item)
//     }
// })

// arr.filter(item => {
//     if (item.completed === true) {
//         a.count++
//     } else if (item.completed === false) {
//         b.count++
//     }
// })

// console.log(a, b);





// /---------------------------------------------------------------------------/




// let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque", "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]

// let emails = {
//     org: [],
//     net: [],
//     info: []
// };

// let other = []

// users.filter(item => {
//     if (item.website.includes('.org') || item.email.includes('.org')) {
//         emails.org.push(item)
//     } else if (item.website.includes('.net') || item.email.includes('.net')) {
//         emails.net.push(item)
//     } else if (item.website.includes('.info') || item.email.includes('.info')) {
//         emails.info.push(item)
//     } else {
//         other.push(item)
//     }

// })

// console.log(emails, other);




// arr.filter(item => {
//     if (item.completed === true) {
//         a.arr.push(item)
//     } else if (item.completed === false) {
//         b.arr.push(item)
//     }
// })



//длинное д.з


// let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha", "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque", "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]

// let emails = {
//     org: [],
//     net: [],
//     info: []
// };

// let other = []

// users.filter(item =>{
//     if(item.website === includes(org)){
//         emails.org.push()(item)
//     }
// })

// console.log(item);


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





// let moshin_bozor = [

//     {
//         company: 'chevrolette',
//         model: 'spark',
//         color: 'black',
//         wheels: 3,
//         priceList: {
//             orgPrice: 11000,
//             forCreadit: 16000,
//             leezeng: 18000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'gentra',
//         color: 'wet asphalt',
//         wheels: 4,
//         priceList: {
//             orgPrice: 14000,
//             forCreadit: 20000,
//             leezeng: 24000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'cobalt',
//         color: 'grey',
//         wheels: 5,
//         priceList: {
//             orgPrice: 13000,
//             forCreadit: 15000,
//             leezeng: 19000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'captiva',
//         color: 'black',
//         wheels: 4,
//         priceList: {
//             orgPrice: 28000,
//             forCreadit: 34000,
//             leezeng: 38000
//         }
//     },
//     {
//         company: 'bmw',
//         model: 'm5',
//         color: 'blue',
//         wheels: 4,
//         priceList: {
//             orgPrice: 110000,
//             forCreadit: 210000,
//             leezeng: 200000
//         }
//     },
//     {
//         company: 'mrecedes',
//         model: 's63',
//         color: 'white',
//         wheels: 4,
//         priceList: {
//             orgPrice: 90000,
//             forCreadit: 100000,
//             leezeng: 140000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'spark',
//         color: 'black',
//         wheels: 3,
//         priceList: {
//             orgPrice: 11000,
//             forCreadit: 16000,
//             leezeng: 18000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'gentra',
//         color: 'wet asphalt',
//         wheels: 4,
//         priceList: {
//             orgPrice: 14000,
//             forCreadit: 20000,
//             leezeng: 24000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'cobalt',
//         color: 'grey',
//         wheels: 5,
//         priceList: {
//             orgPrice: 13000,
//             forCreadit: 15000,
//             leezeng: 19000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'captiva',
//         color: 'black',
//         wheels: 4,
//         priceList: {
//             orgPrice: 28000,
//             forCreadit: 34000,
//             leezeng: 38000
//         }
//     },
//     {
//         company: 'bmw',
//         model: 'm5',
//         color: 'blue',
//         wheels: 4,
//         priceList: {
//             orgPrice: 110000,
//             forCreadit: 210000,
//             leezeng: 200000
//         }
//     },
//     {
//         company: 'mrecedes',
//         model: 's63',
//         color: 'white',
//         wheels: 4,
//         priceList: {
//             orgPrice: 90000,
//             forCreadit: 100000,
//             leezeng: 140000
//         }
//     },
// ]

// let chevrollet = 0
// let bmw = 0
// let mrs = 0

// for (let item of moshin_bozor) {
//     if (item.company === 'mrecedes') {
//         mrs++
//     } else if (item.company === 'bmw') {
//         bmw++
//     } else if (item.company === 'chevrolette') [
//         chevrollet++
//     ]
// }

// let persantage_chevrollet = chevrollet * 100 / moshin_bozor.length
// let persantage_bmw = bmw * 100 / moshin_bozor.length
// let persantage_mrs = mrs * 100 / moshin_bozor.length

// console.log('Chevrolet составляет =' + Math.round(persantage_chevrollet) + '%', 'BMW составляет =' + Math.round(persantage_bmw) + '%', 'Mersedes составляет =' + Math.round(persantage_mrs) + '%');


//16.03.2022

// let moshin_bozor = [
//     {
//         company: 'chevrolette',
//         model: 'spark',
//         color: 'black',
//         wheels: 3,
//         priceList: {
//             orgPrice: 11000,
//             forCreadit: 16000,
//             leezeng: 18000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'gentra',
//         color: 'wet asphalt',
//         wheels: 4,
//         priceList: {
//             orgPrice: 14000,
//             forCreadit: 20000,
//             leezeng: 24000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'cobalt',
//         color: 'grey',
//         wheels: 5,
//         priceList: {
//             orgPrice: 13000,
//             forCreadit: 15000,
//             leezeng: 19000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'captiva',
//         color: 'black',
//         wheels: 4,
//         priceList: {
//             orgPrice: 28000,
//             forCreadit: 34000,
//             leezeng: 38000
//         }
//     },
//     {
//         company: 'bmw',
//         model: 'm5',
//         color: 'blue',
//         wheels: 4,
//         priceList: {
//             orgPrice: 110000,
//             forCreadit: 210000,
//             leezeng: 200000
//         }
//     },
//     {
//         company: 'mrecedes',
//         model: 's63',
//         color: 'white',
//         wheels: 4,
//         priceList: {
//             orgPrice: 90000,
//             forCreadit: 100000,
//             leezeng: 140000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'spark',
//         color: 'black',
//         wheels: 3,
//         priceList: {
//             orgPrice: 11000,
//             forCreadit: 16000,
//             leezeng: 18000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'gentra',
//         color: 'wet asphalt',
//         wheels: 4,
//         priceList: {
//             orgPrice: 14000,
//             forCreadit: 20000,
//             leezeng: 24000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'cobalt',
//         color: 'grey',
//         wheels: 5,
//         priceList: {
//             orgPrice: 13000,
//             forCreadit: 15000,
//             leezeng: 19000
//         }
//     },
//     {
//         company: 'chevrolette',
//         model: 'captiva',
//         color: 'black',
//         wheels: 4,
//         priceList: {
//             orgPrice: 28000,
//             forCreadit: 34000,
//             leezeng: 38000
//         }
//     },
//     {
//         company: 'bmw',
//         model: 'm5',
//         color: 'blue',
//         wheels: 4,
//         priceList: {
//             orgPrice: 110000,
//             forCreadit: 210000,
//             leezeng: 200000
//         }
//     },
//     {
//         company: 'mrecedes',
//         model: 's63',
//         color: 'white',
//         wheels: 4,
//         priceList: {
//             orgPrice: 90000,
//             forCreadit: 100000,
//             leezeng: 140000
//         }
//     },
// ]

// let from = prompt('from')
// let to = prompt('to')

// let choose = moshin_bozor.filter(item => item.priceList.orgPrice >= from && item.priceList.orgPrice <= to)

// console.log(choose);

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


// console.log(user.name);

// методы массивов

// Object.assign(user, money)//объединяет объекты
// let values = Object.values(user)//берет все значения
// let keys = Object.keys(user)//берет все ключи 
// let entras = Object.entries(user)//берет все из объекта в массив


// console.log(entras);




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



// if (Math.max(num) > Math.max(str) || Math.max(num) > Math.max(bool)) {
//     console.log(num + 'больше');
// } else if (Math.max(str) > Math.max(num) || Math.max(str) > Math.max(bool)) {
//     console.log(str + 'больше');
// } else if (Math.max(bool) > Math.max(num) || Math.max(bool) > Math.max(str)) {
//     console.log(bool + 'больше');
// }


// console.log(
//     Math.max(num.length, str.length, bool.length)
// );


/----------------------------------------------------------------------------/

//17.03.2022 год

// let arr = ['Gulnaz', 'Parviz', 'Daler', 'Amir', 'Daniel', 'Davlat', 'Damir', 'Jurabek', 'Jaxongir', 'Said', 'Karina']

// let name = prompt('имя')

// for (let item of arr) {
//     if (item[0] === name) {
//         console.log(item);
//     }
// }


// let arr = [
//     {
//         id: 1,
//         elem: 'Bread',
//         price: '5000'
//     },
//     {
//         id: 2,
//         elem: 'pizza',
//         price: '50000'
//     },
//     {
//         id: 3,
//         elem: 'water',
//         price: '10000'
//     },
//     {
//         id: 4,
//         elem: 'meat',
//         price: '80000'
//     },
//     {
//         id: 5,
//         elem: 'egs',
//         price: '35000'
//     },
//     {
//         id: 6,
//         elem: 'rolton',
//         price: '5000'
//     },
//     {
//         id: 7,
//         elem: 'maslo',
//         price: '18000'
//     },
//     {
//         id: 8,
//         elem: 'ramyon',
//         price: '22000'
//     },
//     {
//         id: 9,
//         elem: 'tvorog',
//         price: '7000'
//     },
//     {
//         id: 10,
//         elem: 'vodka',
//         price: '10000'
//     }
// ]

// let discount = 20

// for (let item of arr) {
//     let num = Number(arr.price)

//     item.price = item.price - (discount * item.price / 100)
//     console.log(item.price);
// }

// /------------------------------------------------------------------------------/


// for (let item of arr_school) {
//     item.totalExpenses = 0

//     for (let item2 of item.expenses) {
//     item.totalExpenses += item2.price
//     }
// }

// console.log(arr_school);



// for (let item of arr_school) {
//     item.totalExpenses = []

//     for (let item2 of item.expenses) {
//         item.totalExpenses.push(item2.price)
//     }

//     item.totalExpenses = item.totalExpenses.reduce((a, b) => a + b)

//     console.log(item.totalExpenses);
// }

// console.log(arr_school);
