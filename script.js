function display(value) {
    document.getElementById("Display").value += value;
}

function clearall() {
    document.getElementById("Display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("Display").value;
    document.getElementById("Display").value = currentValue.slice(0, -1);
}

function rescalculate() {
    let result = eval(document.getElementById("Display").value);
    document.getElementById("Display").value = result;
}
