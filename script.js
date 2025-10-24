function openCalculator() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("calculatorSection").style.display = "flex";
}

// Adds numbers/dot to display and updates preview
function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
    updateSubDisplay();
}

// Handles all sign buttons (including X and ÷)
function addSign(sign) {
    const display = document.getElementById("display");
    display.value += sign;
    updateSubDisplay();
}

// Main equals operation
function calculate() {
    const display = document.getElementById("display");
    let result = getResult(display.value);
    if (result === undefined || result === null || result === "") {
        display.value = "Error";
    } else {
        display.value = result;
    }
    document.getElementById("subDisplay").innerText = '';
}

// Clears full entry and live preview
function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("subDisplay").innerText = "";
}

// Removes last entry and updates preview
function deleteOne() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    updateSubDisplay();
}

// Returns final result of string, replaces friendly signs for JS
function getResult(expr) {
    if (!expr) return "";
    try {
        let toEval = expr.replace(/÷/g, "/").replace(/X/g, "*");
        // Prevent invalid last char like sign
        if (/[*+/-.]$/.test(toEval)) return "";
        let res = Function('"use strict";return (' + toEval + ")")();
        return res;
    } catch {
        return "";
    }
}

// Updates pre-result below the main
function updateSubDisplay() {
    const display = document.getElementById("display");
    let subDisplay = document.getElementById("subDisplay");
    let val = display.value;

    // Check for valid safe calc input only
    let result = getResult(val);
    if (
        val.length &&
        !isNaN(result) &&
        result !== "" &&
        !/[+-X÷.]$/.test(val) // Don't show pre-result on incomplete expressions
    ) {
        subDisplay.innerText = result;
    } else {
        subDisplay.innerText = "";
    }
}
