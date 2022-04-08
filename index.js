let courses = [
    {
        title: 'SMM',
        howLong: 3
    },
    {
        title: 'Dev',
        howLong: 6
    },
    {
        title: 'Graph',
        howLong: 4
    },
]

let earnings = {
    total: 0,
    max: 0,
    min: 0
}

let m = Number
let w = Number
let average_age = Number
let smm = Number
let dev = Number
let graph = Number
let students = [
        {
            sex: 'm',
            age: 14,
            payment: 1220000,
            course: {
                title: 'SMM',
            }
        },
        {
            sex: 'm',
            age: 24,
            payment: 1883000,
            course: {
                title: 'Graph'
            }
        },
        {
            sex: 'w',
            age: 16,
            payment: 2190000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'm',
            age: 19,
            payment: 718000,
            course: {
                title: 'Graph'
            }
        },
        {
            sex: 'w',
            age: 15,
            payment: 2195000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'm',
            age: 24,
            payment: 460000,
            course: {
                title: 'SMM'
            }
        },
        {
            sex: 'w',
            age: 14,
            payment: 560000,
            course: {
                title: 'SMM'
            }
        },
        {
            sex: 'w',
            age: 22,
            payment: 160000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'm',
            age: 26,
            payment: 883000,
            course: {
                title: 'Graph'
            }
        },
        {
            sex: 'w',
            age: 26,
            payment: 750000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'm',
            age: 23,
            payment: 212000,
            course: {
                title: 'Graph',
            }
        },
        {
            sex: 'w',
            age: 24,
            payment: 883000,
            course: {
                title: 'Graph'
            }
        },
        {
            sex: 'w',
            age: 27,
            payment: 190000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'w',
            age: 19,
            payment: 210000,
            course: {
                title: 'Graph'
            }
        },
        {
            sex: 'w',
            age: 21,
            payment: 770000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'm',
            age: 18,
            payment: 1200000,
            course: {
                title: 'SMM'
            }
        },
        {
            sex: 'w',
            age: 51,
            payment: 880000,
            course: {
                title: 'SMM'
            }
        },
        {
            sex: 'm',
            age: 51,
            payment: 2430000,
            course: {
                title: 'Dev'
            }
        },
        {
            sex: 'w',
            age: 33,
            payment: 1277000,
            course: {
                title: 'Graph'
            }
        },
        {
            sex: 'w',
            age: 21,
            payment: 2750000,
            course: {
                title: 'Dev'
            }
        },
    ]

     // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.
     // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс
     // 2. Сохранить количество девочек и мальчиков внутри переменных m и w
     // 3. Сохранить заработок учебного центра в earning.total
     // 4. Узнать кто больше всех платит за обучение в earning.max
     // 5. Узнать кто меньше всех платит за обучение в earning.min
     // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph // done
     // 7. Посчитать средний возраст студентов в average_age
    const setup = (arr) => {
    // 1
        for(let item of arr) {
            
        }
    // 1

    // 2
        let mFilter = arr.filter(item => item.sex == 'm')
        let mFilterl = mFilter.length
        m = mFilterl
        let wFilter = arr.filter(item => item.sex == 'w')
        let wFilterl = wFilter.length
        w = wFilterl
        // console.log(m);
        // console.log(w);
    // 2

    // 3
        let all_totalsum = 0
        all_totalsum = arr.map(item => item.payment).reduce((prev, curr) => prev + curr, 0);
        // console.log(all_totalsum);
    // 3

    // 4
        earnings.max = arr.reduce((acc, curr) => acc.payment < curr.payment ? acc : curr);
    // 4

    // 5
        earnings.min = arr.reduce((acc, curr) => acc.payment > curr.payment ? acc : curr);
    // 5

    // 6    done
        let devFilter = arr.filter(item => item.course.title == 'Dev')
        let devFilterl = devFilter.length
        dev = devFilterl
        let smmFilter = arr.filter(item => item.course.title == 'SMM')
        let smmFilterl = smmFilter.length
        smm = smmFilterl
        let graphFilter = arr.filter(item => item.course.title == 'Graph')
        let graphFilterl = graphFilter.length
        graph = graphFilterl
        // console.log(dev);
        // console.log(smm);
        // console.log(graph);
    // 6    done

    // 7
        for(let item of arr) {
            let all_age = 0
            all_age = arr.map(item => item.age).reduce((prev, curr) => prev + curr, 0);
            average_age = all_age / (arr.length - 1)
            // console.log(average_age);
        }
    // 7
    }

setup(students)