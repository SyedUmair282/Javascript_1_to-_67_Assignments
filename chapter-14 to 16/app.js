// part1
// var student_names = [];
// part2
// var student_names = new Array;
// part3
// var string_array = ["ali", "jibran", "khan"];
// part4
// var number_array = [1, 2, 3, 4];
// part5
// var mixed_array = ["khan", "rafay", 3, 2, 6];
// part6
// var boolean_array = [true, false, false, true];
// part7
// var edu_qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// for (var i = 0; i < edu_qualification.length; i++) {
//     document.write("<h1>" + (i + 1) + ") " + edu_qualification[i] + "<br>");
// }
// part8
// var stu_names = ["Michael", "John", "Tony"];
// var stu_scores = [320, 230, 480];
// var total_marks = 500;
// for (var i = 0; i < 3; i++) {
//     document.write("<h1>" + "Score of " + stu_names[i] + " " + stu_scores[i] + ". " + "Percentage: " + (stu_scores[i] * 100 / 500) + "%" + "<br>");
// }
// part9

// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// var input_beginning = prompt("What color do you want to add at the beginning of the array");
// color.unshift(input_beginning);
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// var input_beginning = prompt("What color do you want to add at the last of the array");
// color.push(input_beginning);
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// var input_beginning = prompt("What two more color do you want to add at the beginning of the array");
// var input_beginning1 = prompt("The second color do you want to add at the beginning of the array");
// color.unshift(input_beginning, input_beginning1);
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// color.shift();
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// color.pop();
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// var input_beginning = prompt("What color do you want to add at desire index of array");
// color.splice(3, 1, input_beginning);
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }
// document.write("***************************************************<br>");
// var color = ["red", "blue", "green", "orange", "yellow", "black"];
// color.splice(3, 3);
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i] + "<br>");
// }

// part 10
// var student_scores = [320, 280, 480, 120];
// document.write("Scores of students : " + student_scores);
// document.write("<br>Order Scores of students : " + student_scores.sort());

// part11
// var city_names = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// document.write("Cities list:" + "<br>" + city_names);
// var Selected_city = city_names.slice(2, 4);
// document.write("<br>Selected cities list:<br>" + Selected_city);

// part12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:<br>" + arr);
// var string = arr.join();
// document.write("<br>String:<br>" + string);

// part15
// var manufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("DropDown List:<br>");
// for (var i = 0; i < manufacture.length; i++) {
//     document.write("<br>" + manufacture[i]);
// }

// part13
// var devices = new Array(4);
// devices[0] = prompt("Enter zero index");
// devices[1] = prompt("Enter first index");
// devices[2] = prompt("Enter second index");
// devices[3] = prompt("Enter third index");
// document.write("Devices:<br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write(devices[i] + ",");
// }
// document.write("<br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("out:<br>" + devices[i] + "<br>");
// }

// part14
// var devices = new Array(4);
// devices[0] = prompt("Enter zero index");
// devices[1] = prompt("Enter first index");
// devices[2] = prompt("Enter second index");
// devices[3] = prompt("Enter third index");
// document.write("Devices:<br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write(devices[i] + ",");
// }
// document.write("<br>");
// for (var i = 3; i < devices.length; i--) {
//     document.write("out:<br>" + devices[i] + "<br>");
//     if (i == 0) {
//         break;
//     }
// }