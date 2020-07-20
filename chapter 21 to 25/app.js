//part1
// var first_name = prompt("Enter your first name");
// var Last_name = prompt("Enter your first name");
// var full_name = first_name + Last_name;
// document.write("Welcome to Second Assignment of javascript!!" + full_name);

//part2
// var fav_mobile = prompt("Enter your favourite mobile model");
// document.write("My Favourite phone is: " + fav_mobile + "<br>");
// document.write("lenght of string: " + fav_mobile.length);

//part3
// var string = "Pakistani";
// document.write("string: " + string);
// var index = string.indexOf("n");
// document.write("<br>Index of 'n': " + index);

//part4
// var string = "Hello World";
// document.write("string: " + string);
// var index = string.lastIndexOf("l");
// document.write("<br>Last Index of 'l': " + index);

//part5
// var string = "Pakistani";
// document.write("string: " + string);
// var index = string.charAt(3);
// document.write("<br>Character at index 3: " + index);

//part6
// var first_name = prompt("Enter your first name");
// var Last_name = prompt("Enter your first name");
// document.write("Welcome to Second Assignment of javascript!! " + first_name + " " + Last_name);

//part7
// var city = "Hyderabad";
// document.write("city: " + city);;
// document.write("<br>After replacement: " + city.replace("Hyderabad", "Islamabad"));

//part8
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// document.write("string: " + message);
// document.write("<br>After replacement: " + message.replace(/and/g, "&"));

//part9
// var value = "472";
// document.write("value: " + value + "<br>" + "Type: " + typeof(value));
// value = parseInt(value);
// document.write("<br>value: " + value + "<br>" + "Type: " + typeof(value));

//part10
// var user_input = prompt("Enter the word Peanuts");
// document.write("User Input: " + user_input);
// document.write("<br>Upper case: " + user_input.toUpperCase());

//part11
// var user_input = prompt("Enter the word javascript");
// document.write("User Input: " + user_input);
// document.write("<br>Title case: " + user_input.charAt(0).toUpperCase() + user_input.slice(1));

//part12
// var num = 35.36;
// document.write("Number: " + num);
// document.write("<br>Result: " + num.toString().replace(".", ""));

//part13
// var user_name = prompt("Enter your name: ");

// for (var i = 0; i < user_name.length; i++) {
//     if (user_name.charAt(i) === "@" || user_name.charAt(i) === "!" || user_name.charAt(i) === "," || user_name.charAt(i) === ".") {
//         var boo = true;
//     }
// }
// if (boo === true) {
//     document.write("Enter valid username");
// } else {
//     document.write("Your name is verified");
// }

//part14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var boo;
// var i;
// var user = prompt("What do you want sir!!");
// var user_case = user.toLowerCase();
// for (i = 0; i < A.length; i++) {
//     if (user_case === A[i]) {
//         boo = true;
//         break;
//     }
// }
// if (boo === true) {
//     document.write(user_case + " is available at index " + i + " in our bakery");
// } else {
//     document.write("We are sorry " + user_case + " is not available in our bakery.");
// }

//part15
// var password = prompt("Enter password!!");
// if (password.charCodeAt("a-z") || password.charCodeAt("A-Z") && password.charCodeAt("0-9") && password.length > 6) {
//     if (password.charAt(0) >= 0) {
//         document.write("Password can not begin with a number");
//     } else {
//         document.write("Your password is: " + password);
//     }
// } else {
//     document.write("Enter a valid password");
// }

//part16
// var university = "University of Karachi ";
// var Result = university.split("");
// for (var i = 0; i < university.length; i++) {
//     document.write(Result[i] + "<br>");
// }

//part17
// var user_input = prompt("Enter a word");
// document.write("User Input: " + user_input);
// var last = user_input.charAt(user_input.length - 1)
// document.write("<br>last character of input is: " + last);

//part18
// var para = "The quick brown fox jumps over the lazy dog";
// var lower = para.toLowerCase();
// var split = lower.split(" ");
// var count = 0;
// for (var i = 0; i < split.length; i++) {
//     for (var j = 0; j < split.length; j++) {
//         if (split[j] === split[i]) {
//             count = parseInt(count) + parseInt(1);

//         }
//     }
//     break;

// }
// document.write("There are " + count + " occurence word in a text");