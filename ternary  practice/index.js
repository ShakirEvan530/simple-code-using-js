var num1 = Number(prompt("Enter the first number"));
var num2 = Number(prompt("Enter the second number"));
var num3 = Number(prompt("Enter the third number"));

var result = num1>num2 && num1>num3 ? "Number 1 is the largest" : num2>num1 && num2>num3 ?"Number 2 is the largest" :"Number 3 is the largest"
document.write(result);