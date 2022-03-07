// const height1 = prompt("Введите первое число!")
// const height2 = prompt("Введите второе число!")
//
// if (height1 < height2)
// {
//     alert(`${height1} Меньше ${height2}`);
// }
// else if (height1 > height2)
// {
//     alert(`${height1} Больше ${height2}`);
// }
// else
// {
//     alert(`${height1} Равны ${height2}`);
// }
//

const length1 = prompt("Введите длину первого массива: ");
const length2= prompt("Введите длину второго массив: ");

if (length1 < length2) {
    console.log(length1 + " Длина первого массива больше чем у второго! " + length2);
} else if (length1 > length2) {
    console.log(length2 + " Длина второго массива больше чем у первого! " + length1);
} else {
    console.log(length1 + " Длина массивов одинакова! " + length2);
}