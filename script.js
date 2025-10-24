function openCalculator() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("calculatorSection").style.display = "flex";
}

// Replace 'X' button click with '*'
function addToDisplay(value) {
    const display = document.getElementById("display");
    if (value === 'X') {
        display.value += '*';
    } else {
        display.value += value;
    }
    updateLiveTotal(); // update total below display
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/[^0-9/*+-.()]/g, ''));
    } catch {
        display.value = "Error";
    }
    updateLiveTotal();
}

function clearDisplay() {
    document.getElementById("display").value = "";
    updateLiveTotal();
}

function deleteOne() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    updateLiveTotal();
}

// Show live total just under display
function updateLiveTotal() {
    const display = document.getElementById("display");
    const total = document.getElementById("live-total");
    let val = display.value;
    // Don't show if empty or ends with operator
    if (!val.trim()) {
        total.textContent = '';
        return;
    }
    // replace all X with * before eval (just in case)
    let expression = val.replace(/X/g, '*');
    try {
        // Only show if last char is not operator
        if (/[d)]$/.test(expression)) {
            // safe eval, only numbers, ., (, ), +, -, *, /
            if (/^[0-9+-*/.() ]+$/.test(expression)) {
                let result = eval(expression);
                if (typeof result === "number" && isFinite(result)) {
                    total.textContent = result;
                } else {
                    total.textContent = '';
                }
            } else {
                total.textContent = '';
            }
        } else {
            total.textContent = '';
        }
    } catch {
        total.textContent = '';
    }
}
