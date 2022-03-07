const color = prompt("Choose type of color: red, yellow, green!");

switch(color) {
    case "green":
        alert("Goo!")
    break;
    case "red":
        alert("Stop!")
        break;
    case "yellow":
        alert("Wait...")
        break;
    default:
        alert("Color is not found!!!")
        break;
}
