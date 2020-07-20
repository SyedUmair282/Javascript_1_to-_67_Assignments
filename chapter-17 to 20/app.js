//part1
// var arr = [
//     [],
//     [],
//     []
// ];
//part2
// var Arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// for (var row = 0; row < 3; row++) {
//     for (var column = 0; column < 4; column++) {
//         document.write(Arr[row][column]);
//     }
//     document.write("<br>");
// }
//part3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }
//part4
// var num = prompt("Enter number for table:");
// var start = prompt("Enter a number of where a table will start");
// var end = prompt("Enter a number of where a table will end");
// for (var i = start; i <= end; i++) {
//     var res = num * i;
//     document.write(num + "x" + i + "=" + res + "<br>");
// }
//part5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.write("<br>Element at index " + i + " is " + fruits[i]);

// }
//part6
// document.write("Counting:")
// for (var i = 1; i <= 15; i++) {
//     document.write(",");
//     document.write(i);
// }
// document.write("Reverse Counting:")
// for (var i = 10; i >= 1; i--) {
//     document.write(",");
//     document.write(i);
// }
// document.write("Even:")
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(",");
//         document.write(i);
//     }
// }
// document.write("Odd:")
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 1) {
//         document.write(",");
//         document.write(i);
//     }
// }
// document.write("Series:")
// for (var i = 1; i <= 10; i++) {
//     var res = i * 2;
//     document.write(res + "k" + ",");
// }
//part7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var i, check;
// var select = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am");
// for (i = 0; i < A.length; i++) {
//     if (select === A[i]) {
//         check = true;
//         break;
//     }
// }
// if (check == true) {
//     document.write(select + " is available at index " + i + " in our bakery");
// } else {
//     document.write(select + " is not available " + "in our bakery");
// }

//part8
// var a = [24, 53, 78, 91, 12];
// var large = 0;
// for (var i = 0; i < a.length; i++) {
//     if (large < a[i]) {
//         large = a[i];
//     }
// }
// document.write("Arrays items: ");
// for (var i = 0; i < a.length; i++) {
//     document.write(a[i] + ",");
// }
// document.write("<br>The largest number is " + large);

//part9
// var a = [24, 53, 78, 91, 12];
// var large = a[0];
// for (var i = 0; i < a.length; i++) {
//     if (large > a[i]) {
//         large = a[i];
//     }
// }
// document.write("Arrays items: ");
// for (var i = 0; i < a.length; i++) {
//     document.write(a[i] + ",");
// }
// document.write("<br>The smallest number is " + large);

//part10
// for (var i = 1; i <= 20; i++) {
//     var res = i * 5
//     document.write(res + ",");
// }