let courses = [

    {

        title: 'SMM',

        howLong: 4

    },

    {

        title: 'Dev',

        howLong: 5

    },

    {

        title: 'Graph',

        howLong: 3

    },

]

let money = {

    total: 0,

    max: 0,

    min: 0

}

let m = 0

let w = 0

let average_age = 0

let smm = 0

let dev = 0

let graph = 0

let lc = [

    {

        sex: 'm',

        age: 18,

        payment: 220000,

        course: {

            title: 'SMM',

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 245000,

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

        sex: 'm',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 16,

        payment: 195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 290000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 215000,

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

        age: 24,

        payment: 245000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 230000,

        course: {

            title: 'Dev'

        }

    }

]


let func = (courses, students) => {
    let all_money = [];
    let all_average_age = 0;
    for (let item of students) {
        for (let item2 of courses) {
            if (item.course.title == item2.title) {
                item.course.howLong = item2.howLong;
            }
        }
        if (item.sex == 'm') {
            m += 1;
        } else {
            w += 1;
        }


        money.total += item.payment;
        all_money.push(item.payment);

        money.max = Math.max(...all_money);
        money.min = Math.min(...all_money);

        switch (item.course.title) {
            case 'SMM':
               smm += 1;
               break;
            case 'Dev':
               dev += 1;
            case 'Graph':
               graph += 1;
               break;
         }
         all_average_age += item.age

         average_age = Math.ceil(all_average_age / students.length - 1)
    }
    console.log(lc);
    console.log('Men ' + m, 'Women ' + w);
    console.log(`TOTAL ${money.total}`);
    console.log('MONEY MAX ' + money.max);
    console.log('MONEY MIN ' + money.min);
    console.log(`SMM - ${smm} Dev - ${dev } Graph - ${graph}`);
    console.log('average_age ' + average_age);



}

func(courses, lc)
