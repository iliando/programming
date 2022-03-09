const length1 = [`ff`, 32,]
const length2 = [`dfd`, 54, 'fgf']

if (length1.length > length2.length) {
    alert('первый больше')
} else if (length1.length === length2.length) {
    alert('они равны!')

} else if (length1.length < length2.length) {
    alert('второй больше')
}
