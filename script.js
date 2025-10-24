function openCalculator() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("calculatorSection").style.display = "flex";
}

function addToDisplay(value) {
    const display = document.getElementById("display");
    // Multiplication: insert proper symbol  
    if(value === "×") display.value += "×";
    else if(value === "÷") display.value += "÷";
    else display.value += value;
    showPreview();
}

function calculate() {
    const display = document.getElementById("display");
    try {
        let expr = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        display.value = eval(expr);
        showPreview(); // Update preview with answer
    } catch {
        display.value = "Error";
        document.getElementById("preview").innerText = "";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("preview").innerText = "";
}

function deleteOne() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    showPreview();
}

function showPreview() {
    const display = document.getElementById("display");
    const preview = document.getElementById("preview");
    let expr = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    let ans = "";
    try {
        if (expr.trim() !== "") {
            ans = eval(expr);
            if (typeof ans !== 'undefined' && ans !== null && ans !== "" && !isNaN(ans)) {
                preview.innerText = ans;
            } else {
                preview.innerText = "";
            }
        } else {
            preview.innerText = "";
        }
    } catch {
        preview.innerText = "";
    }
}
