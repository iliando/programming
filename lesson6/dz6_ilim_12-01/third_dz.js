const list = [];

const name = document.querySelector("#name")
const submit = document.querySelector("#submit")

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(MainDiv)
}
submit.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value+" hello"
    }
    this.append(list);
    list.push(obj);
    render()
}