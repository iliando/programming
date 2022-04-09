const Arr = ["Dusty", 'Johny', 'Joe', 'Ilim'];

const btn = document.getElementById('btn');
const numbers = document.getElementById('numbers');
const input = document.getElementById('name');




function Search (e){
    e.preventDefault()
    Arr.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test()
        if (input.value === ''){
            console.log('Поле пустое')
            return result === false
        }
        else if (result === false){
            console.log('Совпадений не найдено!')
        }
        else if (result ===  true){
            alert("Совпадения найдены!")
        }
    });
}

function addNumberTag (){
    const regex = new RegExp(`\\W`, 'g')
    const div = document.getElementById('div')
    const a = document.createElement('a')
    div.append(a)

    a.innerText = numbers.value.replace(regex, '')
    a.setAttribute('href', `tel:${numbers.value.replace(regex, '')}`)
}



btn.addEventListener('click', Search)
btn.addEventListener('click', addNumberTag)

const obj = {
    name: 'Ilim',
    surname: 'Talgartbekov',
    age: 17
}

const json = JSON.stringify(obj)
localStorage.setItem('product', json)
const product = localStorage.getItem('product')
const js_obj = JSON.parse(product)
console.log(js_obj)

function del () {
    localStorage.clear()
}

function del2() {
    localStorage.removeItem(`${document.getElementById('del_inp').value}`, json)
}

function add (){
    localStorage.setItem(`${document.getElementById('add_inp').value}`, json)
}

document.getElementById('delete').addEventListener('click', del)
document.getElementById('add').addEventListener('click', add)
document.getElementById('key_delete').addEventListener('click', del2)