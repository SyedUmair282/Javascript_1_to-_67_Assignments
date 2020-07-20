//part1(i)
// var main_content = document.getElementById('main-content');
// console.log(main_content);

//part1(ii)
// var main_content = document.getElementById('main-content');
// for (var i = 1; i < main_content.childNodes.length; i = i + 2) {
//     console.log(main_content.childNodes[i]);
// }

//part1(iii)
// var render = document.getElementsByTagName("P")
// for (var i = 0; i < render.length; i++) {
//     console.log(render[i].childNodes[0].nodeValue);
// }

//part1(iv)
// var input = document.getElementById('first-name');
// input.value = "Alex";

//part1(v)
// var input1 = document.getElementById('last-name');
// input1.value = "Bank";
// var input2 = document.getElementById('email');
// input2.value = "alexbank@example.com";

//part2(i)
// var form_content = document.getElementById("form-content");
// var a = form_content.nodeType;
// console.log(a); //The output is 1 means its nodetype is 1 because it is a tag.

//part2(ii)
// var last_name = document.getElementById("lastName");
// console.log(last_name.nodeType); //1
// console.log(last_name.firstChild.nodeType); //3

//part2(iii)
// var last_name = document.getElementById("lastName");
// var update = "lastName: Vince";
// last_name.firstChild.nodeValue = update;

//part2(iv)
// var main_content = document.getElementById('main-content');
// console.log(main_content.childNodes[1]);
// console.log(main_content.childNodes[9]);

//part2(v)
// var last_name = document.getElementById('lastName');
// console.log(last_name.previousSibling.previousSibling);
// console.log(last_name.nextSibling.nextSibling);

//part2(vi)
// var email = document.getElementById("email");
// console.log(email.parentNode);
// console.log(email.nodeType);