//part1
// var a = +prompt("Enter first value");
// var b = +prompt("Enter second value");
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is " + c);
// //part2
// var a = +prompt("Enter first value");
// var b = +prompt("Enter second value");
// var c = a - b;
// document.write("subtraction of " + a + " and " + b + " is " + c);
// var a = +prompt("Enter first value");
// var b = +prompt("Enter second value");
// var c = a * b;
// document.write("Multiplication of " + a + " and " + b + " is " + c);
// var a = +prompt("Enter first value");
// var b = +prompt("Enter second value");
// var c = a / b;
// document.write("Division of " + a + " and " + b + " is " + c);
// var a = +prompt("Enter first value");
// var b = +prompt("Enter second value");
// var c = a % b;
// document.write("Modulus of " + a + " and " + b + " is " + c);
//part3
//var x;
// document.write("<br>Value after variable declaration is: " + x);
// x = 5;
// document.write("<br>Initial value: " + x);
// x++;
// document.write("<br>Value After increament is: " + x);
// x = x + 7;
// document.write("<br>Value after addtion is: " + x);
// x--;
// document.write("<br>Value after decrement is: " + x);
// document.write("<br>The Remainder is: " + x % 3);
//part4
// var ticket = 600;
// var five_tickets = 600 * 5;
// document.write("Total cost to buy 5 tickets to a movie is: " + five_tickets + "PKR");
//part5
// var y = prompt("Enter a number for table");
// var i, res
// for (i = 1; i <= 10; i++) {
//     res = y * i;
//     document.write(y + "x" + i + "=" + res + "<br>");
// }
//part6
// var celsius = 25;
// var farenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "<sup>o</sup>" + "C is " + farenheit + "<sup>o</sup>" + "F<br>");
// var farenheit1 = 70;
// var celsius1 = (farenheit1 - 32) * 5 / 9;
// document.write(farenheit1 + "<sup>o</sup>" + "F is " + celsius1 + "<sup>o</sup>" + "C");
//part7
// var price_of_1_item = 650;
// var price_of_2_item = 100;
// var order_quantity_item_1 = 3;
// var order_quantity_item_2 = 7;
// var shipping_charges = 100;
// var total_cost = parseInt(price_of_1_item * order_quantity_item_1) + parseInt(price_of_2_item * order_quantity_item_2) + parseInt(shipping_charges);
// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + price_of_1_item);
// document.write("<br>Quantity of item 1 is " + order_quantity_item_1);
// document.write("<br>Price of item 2 is " + price_of_2_item);
// document.write("<br>Quantity of item 1 is " + order_quantity_item_1);
// document.write("<br>Shipping Charges is " + shipping_charges);
// document.write("<br>Total cost of your order is " + total_cost);
//part8
// var total_marks = 980;
// var marks_obtained = 804;
// var percentage = (804 * 100) / 980;
// document.write("<h1>Marksheet</h1>");
// document.write("<br>Total Marks: " + total_marks);
// document.write("<br>Marks Obtained: " + marks_obtained);
// document.write("<br>Percentage: " + percentage);
//part9
// var us_dollar = 104.80;
// var saudi_riyal = 28;
// var pakistani_total_currency = parseInt(us_dollar * 10) + parseInt(saudi_riyal * 25);
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR " + pakistani_total_currency);
//part10
// var number = 5;
// number = ((number + 5) * 10) / 2;
// document.write("Final answer of expression is: " + number);
//part11
// var current_year = prompt("Enter current year", "Current year");
// var Birth_year = prompt("Enter Your Birth Year", "Birth year");
// var your_age = current_year - Birth_year;
// document.write("<h1>Age Calculator</h1>");
// document.write("<br>Current Year: " + current_year);
// document.write("<br>Birth Year: " + Birth_year);
// document.write("<br>Your Age is: " + your_age);
// your_age = your_age - 1;
// document.write("<br><b>OR</b>");
// document.write("<br>Your Age is: " + your_age);
//part12
// var radius = 20;
// var circumference_of_circle = 2 * 3.142 * radius;
// var area_of_circle = 3.142 * (radius * radius);
// document.write("<h1>The Geometrizer</h1>")
// document.write("<br>Radius of circle: " + radius);
// document.write("<br>Circumference of circle: " + circumference_of_circle);
// document.write("<br>Area of circle: " + area_of_circle);
//part13
// var fav_snack = "Chocolate chip";
// var curr_age = 15;
// var max_age = 65;
// var amount_of_snacks = 3;
// var difference = max_age - curr_age;
// var total_snacks = difference * amount_of_snacks;
// document.write("<h1>Lifetime Supply Calculator</h1>");
// document.write("<br>Favourite snacks: " + fav_snack);
// document.write("<br>Current age: " + curr_age);
// document.write("<br>Estimated Maximum age: " + max_age);
// document.write("<br>Amount of snacks per day: " + amount_of_snacks);
// document.write("<br>You will need " + total_snacks + " " + fav_snack + " to last you until the ripe old age of " + max_age);