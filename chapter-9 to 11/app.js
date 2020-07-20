//part1
// var print = prompt("Enter the city");
// if (print == "karachi") {
//     document.write("<h1>WELCOME TO THE CITY OF LIGHT</h1>");
// } else {
//     document.write("<h1>WELCOME TO THE " + print);
// }
//part2
// var gender = prompt("Enter your gender");
// if (gender == "male") {
//     document.write("<h1>Good Morning Sir</h1>");
// } else if (gender == "female") {
//     document.write("<h1>Good Morning Ma’am. </h1>");
// } else {
//     document.write("<h1>Invalid Gender. </h1>");
// }
//part3
// var signal_color = prompt("Enter signal color");
// if (signal_color == "red") {
//     document.write("<h1>Must stop.</h1>");
// } else if (signal_color == "yellow") {
//     document.write("<h1>Ready to move.</h1>");
// } else if (signal_color == "green") {
//     document.write("<h1>Move now.</h1>");
// } else {
//     document.write("<h1>Invalid signal color .</h1>");
// }
//part4
// var fuel = +prompt("Enter your car fuel in litres");
// if (fuel < 0.25) {
//     document.write("<h1>Please refill the fuel in your car.</h1>");
// } else {
//     document.write("<h1>Fuel of your car is okay.</h1>");
// }
//part5
//a)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
//output=true
//b)
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
//output=false
//c)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
//output=false
// if (c === 13) {
//     alert("condition 2 is true");
// }
//output=true
// if (++c < 14) {
//     alert("condition 3 is true");
// }
//output=false
// if (c === 14) {
//     alert("condition 4 is true");
// }
//output=true
//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
//output=true
//e
// if (true) {
//     alert("True");
// }
//output=true
// if (false) {
//     alert("False");
// }
//output=false
//f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
//output=true
//part6
// var computer = +prompt('Enter your computer marks', 'Your marks');
// var urdu = +prompt('Enter your urdu marks', 'Your marks');
// var islamiat = +prompt('Enter your islamiat marks', 'Your marks');
// var obt = parseInt(computer) + parseInt(urdu) + parseInt(islamiat);
// var percentage = (obt * 100) / 300;
// document.write("<h1>MARKSHEET</h1>")
// document.write("<br>Total marks: 300");
// document.write("<br>Marks Obtained: " + obt);
// document.write("<br>Percentage: " + percentage + "%");
// if (percentage >= 80) {
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// } else if (percentage >= 70) {
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// } else if (percentage >= 60) {
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// } else if (percentage < 60) {
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// } else {
//     document.write("Invalid");
// }
//part7
// var secret_number = 3;
// var guess_number = prompt();
// if (guess_number == 3) {
//     document.write("Bingo! Correct answer ")
// } else if (guess_number == 3 + 1) {
//     document.write("Close enough to the correct answer");
// } else if (guess_number == 3 - 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Better luck next time!!");
// }
//part8
// var num = prompt("Enter a number");
// if (num % 3 == 0) {
//     document.write("<h1>The number is divisible by 3</h1>");
// }
//part9
// var num1 = prompt("Enter a number to check weather it is even or odd");
// if (num1 % 2 == 0) {
//     document.write("<h1>Even Number</h1>");
// } else {
//     document.write("<h1>Odd Number</h1>");
// }
//part10
// var temp = prompt("Enter a temprature!!");
// if (temp >= 40) {
//     document.write("<h1>It is too hot outside.</h1>");
// } else if (temp >= 30) {
//     document.write("<h1>The Weather today is Normal.</h1>");
// } else if (temp >= 20) {
//     document.write("<h1>Today’s Weather is cool.”</h1>");
// } else if (temp >= 10) {
//     document.write("<h1>OMG! Today’s weather is so Cool.</h1>");
// }
//part11
// var a = +prompt("Enter first number");
// var opr = prompt("Enter operation");
// var b = +prompt("Enter Second number");
// if (opr == "+") {
//     var res = a + b;
//     document.write("<h1>Addition Result is: " + res);
// } else if (opr == "-") {
//     var res = a - b;
//     document.write("<h1>Subtraction Result is: " + res);
// } else if (opr == "*") {
//     var res = a * b;
//     document.write("<h1>Multiplication Result is: " + res);
// } else if (opr == "/") {
//     var res = a / b;
//     document.write("<h1>Division Result is: " + res);
// } else if (opr == "%") {
//     var res = a % b;
//     document.write("<h1>Modulus Result is: " + res);
// }