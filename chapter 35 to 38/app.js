//part1
// var date = new Date();
// document.write(date);

//part2
// function full_name(first_name, last_name) {
//     var fullname = first_name + last_name;
//     document.write("Your full name is: " + fullname);
// }
// var firstname = prompt("Enter your first name:");
// var lastname = prompt("Enter your last name:");
// full_name(firstname, lastname);

//part3
// function calculator(num1, num2) {
//     var res = parseInt(num1) + parseInt(num2);
//     return res;
// }
// var number1 = prompt("Enter num1:");
// var number2 = prompt("Enter num2:");
// document.write("Result is: " + calculator(number1, number2));

//part4
// function calculator(num1, opr, num2) {
//     if (opr === "+") {
//         var res = parseInt(num1) + parseInt(num2);
//         return res;
//     } else if (opr === "-") {
//         var res = num1 - num2;
//         return res;
//     } else if (opr === "*") {
//         var res = num1 * num2;
//         return res;
//     } else if (opr === "/") {
//         var res = num1 / num2;
//         return res;
//     } else if (opr === "%") {
//         var res = num1 % num2;
//         return res;
//     } else {
//         document.write("invalid");
//     }
// }
// var number1 = prompt("Enter num1:");
// var operation = prompt("Enter operator:");
// var number2 = prompt("Enter num2:");
// document.write("Result is: " + calculator(number1, operation, number2));

//part5
// function sqr(num) {
//     var res = num * num;
//     return res;
// }
// var number = prompt("Enter a number:");
// document.write("Square of " + number + " is " + sqr(number));

//part6
// function factorial(num) {
//     var fac = 1;
//     for (var i = 1; i <= num; i++) {
//         fac = fac * i;
//     }
//     return fac;

// }
// var number1 = prompt("Enter a number for factorial");
// document.write("factorial of " + number1 + " is: " + factorial(number1));

//part7
// function coun(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// var st = prompt("enter starting value");
// var en = prompt("enter ending value");
// coun(st, en);

//part8
// function hyponteneus(base, perpendicular) {
//     function Square() {
//         var sqbase = base * base;
//         var sqperpendicular = perpendicular * perpendicular;
//         var hypo = sqbase + sqperpendicular;
//         return hypo;
//     }
//     document.write("Hyponteneus: " + Square());

// }
// var ba = prompt("Enter base:");
// var per = prompt("Enter perpendicular:");
// hyponteneus(ba, per);

//part9
// function area(width, height) {
//     var a = width * height;
//     return a;
// }
// var width = prompt("Enter width");
// var height = prompt("Enter height");
// document.write("Area of triangle: " + area(width, height));

//part10
// function palindrome(word) {
//     var word1 = word;
//     var palindrome = "";
//     for (var i = word1.length - 1; i >= 0; i--) {
//         palindrome += word1[i];
//     }
//     if (word1 === palindrome) {
//         document.write("Palidrome word");
//     } else {
//         document.write("Not a palindrome");
//     }
// }
// var word2 = prompt("Enter a word");
// palindrome(word2);

//part11
// function firstletter(para) {
//     var para1 = para;
//     var para2 = para1.split(" ");
//     for (var i = 0; i < para2.length; i++) {
//         var output = para2[i].charAt(0).toUpperCase() + para2[i].slice(1);
//         document.write(output + " ");
//     }
// }
// var para = prompt("Enter a para");
// firstletter(para);

//part13
// function occur(string, letter) {
//     var string1 = string.split("");
//     var count = 0;
//     for (var i = 0; i < string1.length; i++) {
//         if (string1[i] === letter) {
//             count += 1;
//         }


//     }
//     document.write("There are only " + count + " " + letter + " in the " + string);
// }
// var _string = prompt("Enter a string!!");
// var _letter = prompt("Enter a letter");
// occur(_string, _letter);

//part12
// function larger(para) {
//     var line = para;
//     var line1 = line.split(" ");
//     var large = line1[0];
//     for (var i = 1; i < line1.length; i++) {
//         if (large.length < line1[i].length) {
//             large = line1[i];
//         }
//     }
//     document.write("This word " + large + " is" + " larger");
// }
// var para = prompt("Paragraph");
// larger(para);

//part14
// function calcircumference(radius) {
//     var circumference = 2 * 3.142 * radius;
//     document.write("<br>Circumference is: " + circumference);
// }

// function calarea(radius) {
//     var area = 3.142 * radius * radius;
//     document.write("<br>The area is: " + area);
// }
// var radius1 = prompt("Enter a radius for circle");
// calarea(radius1);
// calcircumference(radius1);