// const phoneNumber = document.getElementById('numberPhone');
//
// const regex = /\w/gi
//
// const textPhoneNumber = phoneNumber.textContent
//
// console.log(textPhoneNumber);
//
// const resultNumber = textPhoneNumber.replace(regex, '')
//
// phoneNumber.setAttribute('href', `tel:${resultNumber}`);
//



// const number = '+996-555-505-505';
// const regex = /\w/gi
//
// const result = number.replace(regex, '');
//
// console.log(number);
// console.log(result);


// 2 способ

// const regexTwo = new RegExp('шаблон','gi')
// let result = text.match(regex);

// console.log(result)
// const result = text.replace(regex, '$& Iliando')
//
// console.log(result)

/// test ()

// const result = regex.test(regex)
// console.log(result)

const phoneNumbers =document.querySelectorAll('.numberPhone');

const regex = /\w/gi

phoneNumbers.forEach(phoneNumber => {
    const textPhoneNumber = phoneNumber.textContent
    const resultNumber = textPhoneNumber.replace(regex, '')
    phoneNumber.setAttribute('href', `tel:${resultNumber}`);
})

const user = {
    name: 'Ilim',
    surname: "Talgartbekov"
}

const regexUser = /[a-z]/g

console.log(`${user.name.replace(regexUser, '*')}`
    `${user.surname.replace(regexUser, '*')}`)




