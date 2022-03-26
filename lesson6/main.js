// ES5 vs ES6

// const a = 10;
//
// let b = 5;
// b = 200
// console.log(b)
//
// var c = 20;
//
// c = 20
// console.log(c + b)

// const first_name = 'jack'
// const last_name = 'Barbaro';

// console.log(first_name + " " + last_name) //es5

// console.log(`${first_name} ${last_name}`);

// const getFullName = (user) => {
//     // return "First Name: " + user.first_name + "\n" + "Last Name:" + user.last_name;
//     return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
// }
//
// const user = {
//     first_name: 'jack',
//     last_name: 'Barbaro'
// }
//
// console.log(getFullName(user))

// spread operator

// const mass = [1, 2, 3, 4, 5]
// const mass2 = [...mass]
// console.log(mass2)

// for(let i = 0; i < mass.length; i++) {
//     mass2.push(mass[i])
// }
// console.log(mass2)

// const tass = [1,2,4,4,2,3,3,2]
// const tss = [...tass]
//
// console.log(tss)
//
// const obj = {
//     username: 'Jack',
//     age: 19,
//     last_name: 'barbaro',
//     full_name: 'jack barbaro'
// }
//
// const obj2 = {
//     ...obj,
//     key: 'value',
//     key2: 'value2'
// }
//
// console.log(obj2)

// ДЕСТРУКТИРИЗАЦИЯ

const props = {
    onsubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key: 'value'
        },
        {
            key: 'value'
        }
    ]
}

const {data, onsubmit} = props;
console.log(data)
onsubmit()
