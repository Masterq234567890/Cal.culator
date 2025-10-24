function openCalculator() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("calculatorSection").style.display = "flex";
}

function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteOne() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
