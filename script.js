let expression = '';
let result = '0';

// Open Calculator Button
document.getElementById('openCalcBtn').addEventListener('click', function() {
    document.getElementById('calculatorContainer').classList.remove('hidden');
});

// Close calculator on clicking outside
document.getElementById('calculatorContainer').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
    }
});

function appendNumber(num) {
    if (result === '0' || result === 'Error') {
        result = num;
    } else {
        result += num;
    }
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression !== '' && result !== 'Error') {
        if (['+', '−', '×', '÷', '%'].includes(expression[expression.length - 1])) {
            expression = expression.slice(0, -1);
        }
        expression += op;
        result = '0';
        updateDisplay();
    }
}

function calculate() {
    try {
        let calcExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');
        
        result = eval(calcExpression).toString();
        expression = result;
        updateDisplay();
    } catch (error) {
        result = 'Error';
        updateDisplay();
    }
}

function clearAll() {
    expression = '';
    result = '0';
    updateDisplay();
}

function clearEntry() {
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        result = expression || '0';
        updateDisplay();
    }
}

function toggleSign() {
    if (result !== '0' && result !== 'Error') {
        if (result[0] === '-') {
            result = result.slice(1);
        } else {
            result = '-' + result;
        }
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('expression').textContent = expression || '';
    document.getElementById('result').textContent = result;
}
