const names = ["Ilim", 'Chloe', 'Figana', 'Dastan', 'Amanya'];

const input = document.getElementById('name');
const btn = document.getElementById('btn');
const numbers = document.getElementById('numbers');

function Search (e){
    e.preventDefault()
    names.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = element.match(regex)
        if (input.value === ''){
            alert('После пустое!')
        }
        else if (result.length === 0){
            alert('Совпадений не найдено!')
        }
        else if (result.length > 0){
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