// script.js

// Pure function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to handle the button click event
function handleAddButtonClick() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = add(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
}

// Adding event listener to the button
document.getElementById('addButton').addEventListener('click', handleAddButtonClick);
