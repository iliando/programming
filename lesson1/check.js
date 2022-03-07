const length1 = prompt("Введите первое число!")
const length2 = prompt("Введите второе число!")

if (length1 < length2)
{
    alert(`${length1} < ${length2}`);
}
else if (length1 > length2)
{
    alert(`${length1} > ${length2}`);
}
else
{
    alert(`${length1} + ${length2}`);
}