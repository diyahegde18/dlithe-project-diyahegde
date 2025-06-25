let num1 = 5
let operator = "+"
let num2 = 6
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "Error! Division by zero.";
  }
} else {
  result = "Invalid operator!";
}

console.log("Result:", result);
