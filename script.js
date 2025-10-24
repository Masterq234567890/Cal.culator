function openCalculator() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("calculatorSection").style.display = "flex";
}

function addToDisplay(value) {
    const display = document.getElementById("display");
    // Operator 'X' for multiplication, but use '*' for JS eval
    if (value === "X") {
        display.value += "×";
    } else if (value === "÷") {
        display.value += "÷";
    } else if (value === "−") {
        display.value += "-";
    } else {
        display.value += value;
    }
    showResult();
}

function calculate() {
    const display = document.getElementById("display");
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        let result = eval(expression);
        display.value = result;
        document.getElementById("result").textContent = "";
    } catch {
        display.value = "Error";
        document.getElementById("result").textContent = "";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("result").textContent = "";
}

function deleteOne() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    showResult();
}

function showResult() {
    const display = document.getElementById("display");
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    let result = "";
    try {
        if (expression && /[0-9)]$/.test(expression)) {
            result = eval(expression);
            if (result !== undefined) {
                document.getElementById("result").textContent = result;
            } else {
                document.getElementById("result").textContent = "";
            }
        } else {
            document.getElementById("result").textContent = "";
        }
    } catch {
        document.getElementById("result").textContent = "";
    }
}
