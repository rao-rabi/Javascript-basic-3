// question#2
// What will be the result for these expressions?
// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

let num = 5 > 4; //true
console.log(num);

let str = "apple" > "pineapple"; //false
console.log(str);

let str1 = "2" > "12"; //true
console.log(str1);

let str2 = undefined == null; //true
console.log(str2);

let str3 = undefined === null; //false
console.log(str3);

let str4 = null == "\n0\n"; // false
console.log(str4);

let str5 = null === +"\n0\n" // false
console.log(str5);

//question#3
// What are the final values of all variables a, b, c and d after the code below?
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?

let a = 1;
let b = 1;
let c = ++a; //the value will be 2 because increment operator is before number
let d = b++; //the value will remain 1 because increment operator is after number
console.log("a =", a, "b =", b, "c =", c, "d =", d)

//question#4
// What are the values of a and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2);

let a1 = 2;
let x = 1 + (a *= 2);
console.log("a1 =", a1, "x =",x);

//question#5
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // 12

let a2 = parseInt(prompt("Enter First Number: "));
let b2 = parseInt(prompt("Enter Second Number: "));
console.log("sum =", a2 + b2);

// question#6
// Rewrite this if using the conditional operator '?':
// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a3 = parseInt(prompt("Enter First Number: "));
let b3 = parseInt(prompt("Enter Second Number: "));
(a3+b3 < 4 )? alert("Below"): alert("Over");


// question#7
// Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt("Enter your position?");
(login == "Employee") ? alert("Hello") :
(login == "Director") ? alert("Greetings") :
(login == "") ? alert("No login") : alert(" ");

// question#8
// What is the code below going to output?
// alert( null || 2 || undefined );

alert(null || 2 || undefined); // the answer is 2, because 2 is first true value

//question#9
//What will the code below output?
// alert( alert(1) || 2 || alert(3) );

alert( alert(1) || 2 || alert(3) ); // the answer is, only 1 and 2 will print out by alert as or operator finds out only first true value and stops.

//question#10
//What is this code going to show?
// alert( 1 && null && 2 );

alert( 1 && null && 2 ); // the answer is null beacause and operator first finds false value.

//question#11
//What will this code show?
// alert( alert(1) && alert(2) );

alert( alert(1) && alert(2) ); //the answer is alert gives 1 and undefined because when alert prints 1 it is undefined and which is false value and alert stops and main alert returns undefined

//question#12
// What will the result be?
// alert( null || 2 && 3 || 4 );

alert( null || 2 && 3 || 4 ); //alert will print out 3 because The precedence of AND "&&" is higher than "||", so it executes first. the equation becomes null||2||4,first truth vlaue which is 3 prints out

//question#13
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
let age = prompt("Enter age: ");
if(!(age >= 14 && age <= 90)){
    console.log("age is not between 14 and 90")
};
// Create two variants: the first one using NOT !, the second one – without it.
if(age <14 || age >90){
    console.log("age is not between 14 and 90")
};

//question#14
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

if (-1 || 0) alert( 'first' ); //runs because result is -1 which is true
if (-1 && 0) alert( 'second' ); //doesnt run because reult is 0 which is false
if (null || -1 && 1) alert( 'third' ); //runs because and operator runs first and answer is 1 because both are true then (null || 1) remains which gives 1 so alert runs

//question#15
// Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

let browser = prompt("Enter browser you wants to use: ");
if(browser == "Edge"){
    alert( "You've got the Edge!" );
}
else if(browser == "Chrome"){
    alert( 'Okay we support these browsers too' );
}
else if(browser == "Firefox"){
    alert( 'Okay we support these browsers too' );
}
else if(browser == "Opera"){
    alert( 'Okay we support these browsers too' );
}
else if(browser == "Safari"){
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
}

// question#16
// Rewrite the code below using a single switch statement:
// let a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let num1 = parseInt(prompt("write num1:", ''));
switch (true) {
    case (num1 == 0):
        alert( 0 )
    break;
    case (num1 == 1):
        alert( 1 )
    break;
    case (num1 == 2 || num1 == 3):
        alert( '2,3' )
    break;
    default:
        alert("Invalid Input")
    break;
}