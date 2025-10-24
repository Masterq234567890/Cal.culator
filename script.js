function openCalculator() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("calculatorSection").style.display = "flex";
}

function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
    updateSubDisplay();
}

function addSign(sign) {
    const display = document.getElementById("display");
    if (sign === 'X') {
        display.value += 'X';
    } else if (sign === '÷') {
        display.value += '÷';
    } else {
        display.value += sign;
    }
    updateSubDisplay();
}

function calculate() {
    const display = document.getElementById("display");
    let input = display.value.replace(/÷/g, '/').replace(/X/g, '*');
    try {
        let res = eval(input);
        display.value = res;
        document.getElementById("subDisplay").innerText = '';
    } catch {
        display.value = "Error";
        document.getElementById("subDisplay").innerText = '';
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("subDisplay").innerText = "";
}

function deleteOne() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    updateSubDisplay();
}

function updateSubDisplay() {
    const display = document.getElementById("display");
    let input = display.value.replace(/÷/g, '/').replace(/X/g, '*');
    let subDisplay = document.getElementById("subDisplay");
    try {
        // Only if input is safe and not empty and ends with number
        if (/^[.d+-*/÷X ]+$/.test(display.value) && /d$/.test(display.value)) {
            let result = eval(input);
            if (result !== undefined && display.value!=="") {
                subDisplay.innerText = result;
            } else {
                subDisplay.innerText = "";
            }
        } else {
            subDisplay.innerText = "";
        }
    } catch {
        subDisplay.innerText = "";
    }
}
