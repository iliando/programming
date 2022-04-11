// формат json

// const product = {
//     id: 1,
//     price: 2000,
//     name: 'samsung'
// }
//
// const jsonproduct = JSON.stringify(product)
//
// console.log(product)
// console.log(jsonproduct)
//
// localStorage.setItem('products', jsonproduct);
//
// const data = localStorage.getItem('products')
//
// console.log(JSON.parse(data))

const obj = {
    name: 'Ilim',
    surname: 'Talgartbekov',
    age: 17
}
const json = JSON.stringify(obj)
console.log(JSON.parse(json))

