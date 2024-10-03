// script.js

// Global variables
var num1, num2, result;

// Function to add two numbers
function add() {
    result = num1 + num2;
}

// Function to handle the button click event
function handleAddButtonClick() {
    // Get input values and assign to global variables
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    // Add the numbers
    add();

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result;
}

// Adding event listener to the button
document.getElementById('addButton').addEventListener('click', handleAddButtonClick);
