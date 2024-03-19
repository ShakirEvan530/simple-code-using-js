 var num1 = prompt("Enter the first number:");
 var num2 = prompt("Enter the second number:");
 var num3 = prompt("Enter the third number:");


 if(num1>num2 && num1>num3){
    document.write("Largest among the three numbers: "+num1);
 }


 if(num2>num1 && num2>num3){
    document.write("Largest among the three numbers: "+num2);
 }


 if(num3>num1 && num3>num2){
    document.write("Largest among the three numbers: "+num3);
 }