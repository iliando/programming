const list = [];

const name = document.querySelector("#name")
const submit = document.querySelector("#submit")

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        mainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(mainDiv)
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