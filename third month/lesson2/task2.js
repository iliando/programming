

// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById('btn3')
//
// const firstFunc = () => {
//     console.log("start 1")
// }
//
// const secFunc = () => {
//     console.log("start 2")
// }
//
// const thirdFunc = () => {
//     console.log("start 3")
// }
//
// btn1.addEventListener('click', firstFunc);
// btn2.addEventListener('click', secFunc);
// btn3.addEventListener('click', thirdFunc);


// setTimeout(function () {
//     console.log("start 3")
// }, 1000)
//
// setTimeout(function () {
//     console.log("start 4")
// }, 2000)
//
//
// console.log("start")
//
// const someFunc = () => {
//     console.log("start 1 ")
// }
//
// const someFuncTwo = () => {
//     console.log("start 2")
// }
//
// someFunc();
//
// someFuncTwo();
//
// console.log("end");
//



const start = document.getElementById('start');
const countPlace = document.getElementById('count');
const stop = document.getElementById('stop');

let count = 0;

start.addEventListener('click', function (){
    // const id = setTimeout(function (){console.log("hello")}, 1000);
    // const id2 = setTimeout(function (){console.log("hello")}, 2000);
    //
    // console.log(id)
    // console.log(id2)

    setInterval(function (){
        // count = count + 1
        count += 1
        countPlace.textContent = count

        if(count === 3) {
            clearInterval(id)
        }
    }, 1000)
})
