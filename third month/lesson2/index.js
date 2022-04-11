
// РЕКУРСИЯ

function getFunctorial (a) {
    if (a === 1) return a ;
    return  a * getFunctorial(a - 1)
}

console.log(getFunctorial(6)) // 120


function pow(x, a) {
    if(a === 1) return x;
    else return  x * pow(x, a - 1)
}

console.log(pow( 2, 2))