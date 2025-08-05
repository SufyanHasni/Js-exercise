// Chapter 6-9 !

// Question 1 !

var a = 11;

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><hr><br>");

// Question 2 !



// Question 3!
var userName = prompt("Enter your name:");
if (userName) {
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("Hello! Welcome to our website.");
}

document.write("<hr><br>");

// Question 5: Multiplication Table

var number = +prompt("Enter a number for multiplication table:");
if (!number) {
    number = 5; // default
}
number = parseInt(number);

document.write("<h3>Multiplication Table of " + number + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

document.write("<hr><br>");

// Question 6: Subject Marks Table

var subject1 = prompt("Enter name of Subject 1:");
var subject2 = prompt("Enter name of Subject 2:");
var subject3 = prompt("Enter name of Subject 3:");

var totalMarks = 100;

var marks1 = +prompt("Enter marks obtained in " + subject1 + ":") || 0;
var marks2 = +prompt("Enter marks obtained in " + subject2 + ":") || 0;
var marks3 = +prompt("Enter marks obtained in " + subject3 + ":") || 0;

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks) * 100).toFixed(0) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks) * 100).toFixed(0) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks) * 100).toFixed(0) + "%</td></tr>");
document.write("<tr><th>Total</th><th>300</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(0) + "%</th></tr>");
document.write("</table>");