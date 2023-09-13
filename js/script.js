//              ОБЪЕКТЫ


// let obj = {
//     name:"Антон",
//     secondName:"Широбоков",
//     new:"что-то",
//     addres:{
//         city: "Kursk",                  // Оъекты в которых лежат КЛЮЧИ с названием
//         street: "Sadovaya",
//         number: "10",
//     },
//     newOption: "Test",

// }

// obj.name = "Не Антон"                   // Меняем имя КЛЮЧА
// obj["name"] = "Not Anton x2"            // Второй метод смены имя

// // delete obj.name                      Удаление ОБЪЕКТА

// console.log(obj)


// for(let value in obj){                 //Прогнали в консоле
//     console.log(value)    
//     console.log(obj[value])
// }

// задание 1

// let x = prompt("Pervoe Cheslo")
// let y = prompt("Vtoroe Chislo")

// function sum(xF, yF){                                   // Функция для проверки
//     if (xF > yF){
//         console.log(xF + " Bolshe")
//     }else{
//         // console.log (yF + " Bolshe")
//         console.log(`${yF} Bolshe`)                     // Строки одинковые но вторая актуальная
//         alert(`${yF} Bolshe`)
//     }
// }

//  sum(10,20)
//  sum(10,20)
//  sum(10,20)                              МОЖЕТ БЫТЬ СКОЛЬКО УГОДНЯ СТРОК
//  sum(10,20)
//  sum(10,20)

// sum(x,y)


// let x1 = 11,
//     x2 = 25,
//     x3 = 88,
//     x4 = 62
// let y1 = 34,
//     y2 = 36,
//     y3 = 77,
//     y4 = 89

// if (x1 > y1){
//     alert (x1 + " Bolshe")
//     if(x2 > y2){
//         alert (x2 + " Bolshe")
//         if(x3 > y3){
//             alert (x3 + " Bolshe")
//             if(x4 > y4){
//                 alert (x4 + " Bolshe")
//             }else{
//                 alert (y4 + " Bolshe")
//             }
//         }else{
//             alert (y3 + " Bolshe")
//         }
//     }else{
//         alert (y2 + " Bolshe")
//     }
// }else{
//     alert (y1 + " Bolshe")
// }




// let rect = {
//     a:20,
//     b:30,
// }

// function informRect (){
//     console.log("первая точка это 0,0")
//     console.log(`вторая  точка это 0,${rect.a}`)
//     console.log(`третья  точка это ${rect.b} , ${rect.a}`)
//     console.log(`вторая  точка это 0,${rect.b}`)
// }
// informRect()


const swiper = new Swiper('.catalog__box--row', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.catalog__arrow catalog__arrow--right',
      prevEl: '.catalog__arrow catalog__arrow--left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });