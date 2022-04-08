// ЗАДАЧИ КОНТРОЛЬНОЙ

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

  },
  {

    sex: 'm',

    age: 18,

    payment: 220000,

    course: {

      title: 'SMM'
    }

  },

]

let func = (courses, students) => {
  // 1. Найти курс сравнив массивы courses и lc и вставить ключ howLong в ключ course массива lc (Вставить ключ howLong в объекты массива lc)
  // Переменная всех денег
  let all_money = [];
  // Переменная всего возраста
  let all_average_age = 0;
   // Цикл массива lc
  for(let item of students){
    // Цикл массива courses
    for(let item2 of courses){
      // Сравнение title двух объектов, courses и ls
      if(item.course.title == item2.title){
        item.course.howLong = item2.howLong;
      }
    }
    // 2. Посчитать сколько мальчиков и сколько девочек (количество) в переменных m и w
    // Проверяю пол студента 
    if(item.sex == 'm'){
      // Если это парень плюсую переменную m
      m += 1;
    } else{
      // Если девушка плюсую переменную w
      w += 1;
    }
     // 3. Посчитать заработок учебного центра в переменной money.total +2 420 000 ответ
      money.total += item.payment;
    //  Заполняю массив all_money для определения самой большой и маленькой суммы
    all_money.push(item.payment);
    // 6. Посчитать сколько студентов учатся на разных курсах в переменных smm dev graph
     switch (item.course.title){
      case 'SMM':
        smm += 1;
        break;
        case 'Dev':
          dev += 1;
          break;
          case 'Graph':
            graph += 1;
            break;
     }
     // Вычисляю общий возраст студентов
     all_average_age += item.age;
  }
  // 4. Посчитать максимальный заработок со студента переменной money.max. Кто платит больше всех?
    money.max = Math.max(...all_money);
  // 5. Посчитать минимальный заработок со студента переменной money.min. Кто платит меньше всех?
  money.min = Math.min(...all_money);
  // 7. Средний возраст студентов в average_age
  average_age = Math.ceil(all_average_age / students.length-1)
}
func(courses, lc);

console.log(`
  result:
  m: ${m};
  m: ${w};
  money.total: ${money.total};
  money.max: ${money.max};
  money.min: ${money.min};
  smm: ${smm};
  dev: ${dev};
  graph: ${graph};
  average_age: ${average_age};
`)