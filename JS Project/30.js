const num1 =prompt("Enter the first number:");
const num2 =prompt("Enter the second number:");
const operation =prompt("Enter the operation (+, -, *, /):");

let result;

switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operation";
}

alert(`Result: ${result}`);
