const list = [];

const name = document.querySelector("#name")
const submit = document.querySelector("#submit")

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const div = document.createElement('div');
        div.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        div.append(p);
        mainDiv.append(div);
    }

    const form = document.querySelector(".home");

    document.querySelector(".list").remove();
    form.append(mainDiv)
}
submit.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value + " Hello "
    }
    this.append(list);
    list.push(obj);
    render()
}