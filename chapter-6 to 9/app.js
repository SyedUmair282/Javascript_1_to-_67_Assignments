//part1
// var a = 10;
// document.write("Result:");
// document.write("<br>The value of a is: " + a);
// document.write("<br>..............................................<br>");
// document.write("<br>The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a);
//part2
// var a = 2;
// var b = 1;
// var Result = --a - --b + ++b + b--;
// document.write("a is: " + a);
// document.write("<br>b is: " + b);
// document.write("<br>Result is: " + Result);
//part3
// var name = prompt("Enter your name");
// document.write("<h1>WELCOME TO JAVASCRIPT " + name);
//part4
// var number = prompt("Enter a number for table");
// if (number == "") {
//     for (var i = 1; i <= 10; i++) {
//         var Result = 5 * i;
//         document.write(5 + "x" + i + "=" + Result + "<br>");
//     }
// } else {
//     for (var i = 1; i <= 10; i++) {
//         var Result = number * i;
//         document.write(number + "x" + i + "=" + Result + "<br>");
//     }
// }
//part5
var sub1 = prompt("Enter subject 1");
var sub2 = prompt("Enter subject 2");
var sub3 = prompt("Enter subject 3");
var sub1_marks = prompt("Enter subject 1 marks");
var sub2_marks = prompt("Enter subject 2 marks");
var sub3_marks = prompt("Enter subject 3 marks");
var total = parseInt(sub1_marks) + parseInt(sub2_marks) + parseInt(sub3_marks);
var total_marks_each_sub = 100;
var Percentage = total * 100 / 300;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr></table>");
document.write(sub1 + "&nbsp;&nbsp;&nbsp;&nbsp;" + total_marks_each_sub + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + sub1_marks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (sub1_marks / 1) + "<br>");
document.write(sub2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total_marks_each_sub + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + sub2_marks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (sub2_marks / 1) + "<br>");
document.write(sub3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total_marks_each_sub + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + sub3_marks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (sub3_marks / 1) + "<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (total_marks_each_sub * 3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Percentage);