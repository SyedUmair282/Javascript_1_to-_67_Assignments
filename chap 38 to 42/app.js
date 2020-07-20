//part1
// function power(a, b) {
//     var result = 1;
//     for (var i = 1; i <= b; i++) {
//         result = result * a;
//     }
//     document.write("The final result is: " + result);
// }
// var base = prompt("Enter base!!");
// var pow = prompt("Enter power!!");
// power(base, pow);

//part2
// function leap_year(year) {
//     if (year % 400 == 0) {
//         document.write("It is a leap year!!");
//     } else if (year % 100 == 0) {
//         document.write("It is not a leap year!!");
//     } else if (year % 4 == 0) {
//         document.write("It is a leap year!!");
//     } else {
//         document.write("It is not a leap year!!");
//     }
// }
// var year = prompt("Enter Year!!");
// leap_year(year);

//part3
// function S(a, b, c) {
//     var b = (parseInt(a) + parseInt(b) + parseInt(c)) / 2
//     return b;
// }
// var d = prompt("Enter value of a!!");
// var e = prompt("Enter value of b!!");
// var f = prompt("Enter value of c!!");
// document.write("The Area of Triangle S is: " + S(d, e, f));



// function aot() {
//     var z = S(d, e, f);
//     var area = z * (z - d) * (z - e) * (z - f);
//     return area;
// }
// document.write("<br>The Area of Triangle is: " + aot());

//part4
// function average(s1, s2, s3) {
//     var sum = (parseInt(s1) + parseInt(s2) + parseInt(s3));
//     var percentage = (sum * 100) / 300;
//     return percentage;
// }
// var sub1 = prompt("Enter your subject-1 marks");
// var sub2 = prompt("Enter your subject-2 marks");
// var sub3 = prompt("Enter your subject-3 marks");

// function student_percentage() {
//     var result = average(sub1, sub2, sub3);
//     return result;
// }
// document.write("The percentage is: " + student_percentage() + "%");

//part5
// function inner(res3) {
//     return res3;
// }

// var str = "hello world"

// function indexof(num) {
//     var res1 = inner(str);
//     for (var i = 0; i < res1.length; i++) {
//         if (num == res1[i]) {
//             document.write(i)
//         }
//     }
// }
// indexof("d");

//part6
// function delete_vowels(para) {
//     var para = para;

//     for (var j = 0; j < para.length; j++) {
//         if (para[j] === "a") {
//             para = para.replace(para[j], "")
//         } else if (para[j] === "e") {
//             para = para.replace(para[j], "")
//         } else if (para[j] === "i") {
//             para = para.replace(para[j], "")
//         } else if (para[j] === "o") {
//             para = para.replace(para[j], "")
//         } else if (para[j] === "u") {
//             para = para.replace(para[j], "")
//         }
//     }

//     document.write("The result is: " + para);
// }
// var para = "hello my name is umair";
// delete_vowels(para);

// part7
// var vowel1 = ['a', 'e', 'i', 'o', 'u'];
// var comp = "";
// var count = 0;
// var send = "Pleases read this application and give me gratuity";
// document.write("Sentence to search succession vowels:" + send);
// countSuccession();

// function countSuccession() {
//     for (var i = 0; i < vowel1.length; i++) {
//         for (var j = 0; j < vowel1.length; j++) {
//             comp = vowel1[i] + vowel1[j];
//             for (var k = 0; k < send.length; k++) {
//                 if (send.slice(k, k + 2) == comp) {
//                     count++;
//                 }
//             }
//         }
//     }
//     document.write("<br>count: " + count);
// }

//part8
// function meters(kilometers) {
//     var meters = kilometers * 1000;
//     document.write("<br>In meter: " + meters);
// }

// function feet(kilometers) {
//     var meters = kilometers * 3280.84;
//     document.write("<br>In feet: " + meters);
// }

// function centimeters(kilometers) {
//     var meters = kilometers * 10000;
//     document.write("<br>In centimeters: " + meters);
// }

// function inches(kilometers) {
//     var meters = kilometers * 39370.1;
//     document.write("<br>In inches: " + meters);
// }
// var kilo_meters = prompt("Enter kilometers");
// document.write("<h1>" + kilo_meters + " kilometers in other units:")
// meters(kilo_meters);
// feet(kilo_meters);
// centimeters(kilo_meters);
// inches(kilo_meters);

//part9
// var count = 1,
//     over_time,
//     over_time_pay,
//     working_hour;
// while (count <= 5) {
//     working_hour = prompt("Enter the working hours:");
//     if (working_hour > 40) {
//         over_time = working_hour - 40;
//         over_time_pay = over_time * 12.00;
//         document.write("<br>Working_hour of employee: " + working_hour);
//         document.write("<br>Overtime payment: " + over_time_pay + " Rupees");
//     } else {
//         alert("You have to work also after 40 hours to get overtime pay");
//     }
//     count++;
// }

//part10
// var withdraw = prompt("Enter the withdraw amount");
// var hundreds = (withdraw / 100);
// document.write("You have " + Math.floor(hundreds) + " hundreds notes");
// var fifty = (withdraw % 100) / 50;
// document.write("<br>You have " + Math.floor(fifty) + " fifty notes");
// var tens = ((withdraw % 100) % 50) / 10;
// document.write("<br>You have " + Math.floor(tens) + " tens notes");