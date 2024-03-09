var userInput = prompt("which table do you want:");
var number = parseInt(userInput);

if (!isNaN(number)) {
    console.log("Multiplication Table of " + number + ":");
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        console.log(number + " x " + i + " = " + result);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}