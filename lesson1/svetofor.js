const color = prompt("Choose type of color: Red, Yellow, Green!");

switch(color) {
    case "Green":
        alert("Goo!")
    break;
    case "Red":
        alert("Stop!")
        break;
    case "Yellow":
        alert("Wait...")
        break;
    default:
        alert("Color is not found!!!")
        break;
}
