var marks = prompt("Enter the mark:");


if(marks<=33){
    document.write("Your grade is: F");
}

else if(marks>33 && marks<=40){
    document.write("Your grade is: D");
}

else if(marks>40 && marks<=50){
    document.write("Your grade is: c");
}

else if(marks>50 && marks<=60){
    document.write("Your grade is: B");
}

else if(marks>60 && marks<=70){
    document.write("Your grade is: A-");
}

else if(marks>70 && marks<=79){
    document.write("Your grade is: A");
}

else{
    document.write("Your grade is: A+");
}