const length1 = prompt("Введите длину первого массива: ");
const length2= prompt("Введите длину второго массив: ");

if (length1 < length2) {
    console.log(length1 + " Длина первого массива больше чем у второго! " + length2);
} else if (length1 > length2) {
    console.log(length2 + " Длина второго массива больше чем у первого! " + length1);
} else {
    console.log(length1 + " Длина массивов одинакова! " + length2);
}