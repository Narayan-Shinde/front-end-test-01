// Multiplication Table Function
function multiplicationTable() {
    const number = parseInt(prompt("Enter a number: "));
    let result = `Multiplication Table for ${number}:\n`;
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }
    alert(result);
}

// Celsius to Fahrenheit Converter
function convertToFahrenheit() {
    const celsius = parseFloat(prompt("Enter temperature in Celsius: "));
    const fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C is equal to ${fahrenheit}°F`);
}

// Positive or Negative Number Checker
function checkNumber() {
    const number = parseFloat(prompt("Enter a number: "));
    if (number > 0) {
        alert(`${number} is positive.`);
    } else if (number < 0) {
        alert(`${number} is negative.`);
    } else {
        alert(`The number is zero.`);
    }
}
