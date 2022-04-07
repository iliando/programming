// const color = prompt('Введите цвет светофора  на англиском к примеру: yellow ')
// switch (color) {
//      case 'red':
//         document.querySelector('.red').style.backgroundColor = color
//         console.log('stop')
//         break
//     case 'yellow':
//         document.querySelector('.yellow').style.backgroundColor = color
//         console.log('wait')
//         break
//     case 'green':
//         document.querySelector('.green').style.backgroundColor = color
//         console.log('go')
//         break
//     default:
//         console.log('no work')
//         break
// }
const colour= prompt('Введите цвет на английском')
switch (colour) {
    case 'red':
        document.querySelector('.red').style.backgroundColor = colour
        console.log('stop')
        break
    case 'yellow':
        document.querySelector('.yellow').style.backgroundColor = colour
        break
    case 'green':
        document.querySelector('.green').style.backgroundColor = colour
        break
    default:
        console.log('no work')
        break
}
