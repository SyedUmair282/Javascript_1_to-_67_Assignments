//part1
// var a = new Date();
// document.write(a);

//part2
// var date0 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date1 = new Date();
// var date2 = date0[date1.getMonth()];
// document.write("Current Month: " + date2);

//part3
// var date0 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date1 = new Date();
// var date2 = date0[date1.getDay()];
// document.write("Today is: " + date2);

//part4
// var date0 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date1 = new Date();
// var date2 = date0[date1.getDay()];
// if (date2 === "Saturday" || date2 === "Sunday") {
//     document.write("It's Funday");
// }

//part5
// var date = new Date();
// if (date.getDate() <= 15) {
//     document.write("First fifteen days of the month ")
// } else {
//     document.write("Last days of the month");
// }

//part6
// var a = new Date();
// document.write("Current Date: " + a);
// document.write("<br>Elapsed Miliseconds since January 1, 1970: " + a.getTime());
// var b = new Date();
// document.write("<br>Elapsed Minutes since January 1, 1970: " + b.getTime() / (60 * 60));

//part7
// var a = new Date();
// var b = a.toString();
// if (b.slice(16, 18) >= 12) {
//     document.write("It's PM");
// } else {
//     document.write("It's AM");
// }

//part8
// var later_date = new Date("December 31, 2020");
// document.write(later_date);

//part9
// var a = new Date();
// var b = new Date("June 18, 2015");
// var diff = a.getTime() - b.getTime();
// var days = diff / (1000 * 60 * 60 * 24);
// var final = Math.floor(days);
// alert(final);

//part10
// var a = new Date();
// var b = new Date("December 05, 2015");
// var diff = a.getTime() - b.getTime();
// var seconds = diff / (1000);
// var final = Math.floor(seconds)
// document.write(final);

//part11
// var a = new Date();
// document.write("Current date: " + a);
// var b = new Date("June 19, 2020 16:10");
// document.write("<br>1 hour ago, it was " + b);

//part12
// var a = new Date();
// document.write("Current date: " + a);
// var b = new Date("June 19, 1920");
// document.write("<br>100 years back, it was " + b);

//part13
// var a = prompt("Enter your age:");
// var age = parseInt(a);
// document.write("Your age is: " + age);
// var b = new Date();
// var c = b.toString();
// var d = c.slice(11, 16);
// var final = d - age;
// document.write("<br>Your birth year is: " + final);

//part14
// var customer_name = "ABC Customer";
// var customer_month = "February";
// var number_of_units = 410;
// var charges_per_unit = 16;
// var net_amount_payable, Gross_Amount_Payable;
// net_amount_payable = number_of_units * charges_per_unit;
// var late_payment_surcharges = 350;
// Gross_Amount_Payable = net_amount_payable + late_payment_surcharges;
// document.write("<h1>K-ELECTRIC BILL</h1>")
// document.write("Customer Name: " + customer_name);
// document.write("<br>Month: " + customer_month);
// document.write("<br>Number Of Units: " + number_of_units);
// document.write("<br>Charges Per Unit: " + charges_per_unit);
// document.write("<br><br>Net Amount Payable (within Due Date): " + net_amount_payable);
// document.write("<br>Late Payment Charges: " + late_payment_surcharges);
// document.write("<br>Gross Amount Payable (after Due Date): " + Gross_Amount_Payable);