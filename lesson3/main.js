// const a = "1";
// let b = 2;
//
// for(let key of []){
//     console.log(key)
// }
//
// while (1 < 0) {
//
// }
//
// if( a === b) {
//
// }

// function sayHello() {
//     console.log("Hello!")
// }
//
// sayHello();

let num = [1,2,3]
let num2 = [3,4,5,5]

function getFullNum(num, num2){
    if (num < num2) {
        console.log(num + '>' + num2)
    }else{
        console.log(num2 + '<' + num)
    }
}

getFullNum(num, num2)


let one = [13,14]
let two = [23,24,25]

function three() {
    if (one.length < two.length) {
        console.log('больше')
    }else if(two.length > one.length) {
        console.log('меньше')
    }else{
        console.log()
    }
}

three(one, two)

//третье

let user = "938";

function greet() {
  console.log(user.length);

}

greet(user)


// говно код
// console.log(user.first_name, user.last_name)
// console.log(user2.first_name, user2.last_name)
// console.log(user3.first_name, user3.last_name)