


let cou = document.getElementById('cou')
    let counter = 0;
    function fun_1() {
    counter++
        cou.innerHTML  = counter;
    }
    function fun_2() {
        counter--;
        if (counter < 1) {
            counter=0;
        }
        cou.innerHTML = counter
    }
    function fun_3() {
        counter = 0;
        if (counter < 1) {
            counter=0;
        }
        cou.innerHTML = counter
    }

