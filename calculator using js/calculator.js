var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum, sub, mul, div;

sum = num1 + num2;
document.write("Addition =" + sum + "<br/>")

sub = num1 - num2;
document.write("subtraction =" + sub + "<br/>")

mul = num1 * num2;
document.write("multiplication =" + mul + "<br/>")

div = num1 / num2;
document.write("division =" + div + "<br/>")