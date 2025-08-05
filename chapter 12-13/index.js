// Chapter 12-13 !

// Question 1 !

var char = prompt("Enter a character:");

if (char >= "0" && char <= "9") {
    alert("The input is a number");
}
else if (char >= "A" && char <= "Z") {
    alert("The input is an uppercase letter");
}
else if (char >= "a" && char <= "z") {
    alert("The input is a lowercase letter");
}
else {
    alert("The input is not a number or letter");
};

// Question 2!

var num1 = prompt("Enter first integer:");
var num2 = prompt("Enter second integer:");

if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
}
else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
}
else {
    alert("Both numbers are equal");
};

// Question 3!

var number = prompt("Enter a number:");

if (number > 0) {
    alert("The number is positive");
}
else if (number < 0) {
    alert("The number is negative");
}
else {
    alert("The number is zero");
}


// Question 4!

var vowel = prompt("Enter a single character:");

if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" ||
    vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U") {
    alert(true);
}
else {
    alert(false);
};


// Question 5!

var correctPassword = "Sufyan123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
}
else if (userPassword == correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
};

// Question 6!


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// Question 7!

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
var message;

if (time >= 0 && time < 1200) {
    message = "Good morning!";
}
else if (time >= 1200 && time < 1700) {
    message = "Good afternoon!";
}
else if (time >= 1700 && time < 2100) {
    message = "Good evening!";
}
else if (time >= 2100 && time <= 2359) {
    message = "Good night!";
}
else {
    message = "Invalid time entered";
}

alert(message);