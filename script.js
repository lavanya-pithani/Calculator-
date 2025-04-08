function appendValue(value) {
    const display = document.getElementById("display");
    const lastChar = display.value.slice(-1);
    
    // Auto insert * before ( if needed
    if (value === '(' && /[0-9)]$/.test(lastChar)) {
        display.value += '*';
    }
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    const display = document.getElementById("display");
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
        display.value = "";
    }
}
