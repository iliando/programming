const height1 = prompt("Введите первое число!")
const height2 = prompt("Введите второе число!")

if (height1 < height2)
{
    alert(`${height1} Меньше ${height2}`);
}
else if (height1 > height2) 
{
    alert(`${height1} Больше ${height2}`);
}
else 
{
    alert(`${height1} Равны ${height2}`);
}