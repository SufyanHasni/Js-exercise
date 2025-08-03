                               // Chapter 5 / Math Expressions 

        // Question 1 !
        
var num1 = 3;

var num2 = 5;

var sum = num1 + num2 ;

document.write("The Sum Of " + num1 +" " + "And "+ num2 + " " +"Is : " + sum + "<br> <br>");

        // Question 2 !

var num1 = 5;
var num2 = 7;

var addition = num1 + num2 ;
var subtraction = num1 - num2 ;
var multiplication = num1 * num2 ;
var division = num1 / num2 ;
var modulus = num1 % num2 ;

document.write ("Addition :" + num1 + "+" + num2 + "=" + addition + "<br>");
document.write ("Subtraction :" + num1 + "-" + num2 + "=" + subtraction + "<br>");
document.write ("Multiplication :" + num1 + "*" + num2 + "=" + multiplication + "<br>");
document.write ("Division :" + num1 + "/" + num2 + "=" + division + "<br>");
document.write ("Modulus :" + num1 + "%" + num2 + "=" + modulus + "<hr> <br> <br>");

        // Question 3 !
 var a;
    document.write("Value after variable declaration is: " + a + "<br>");

 a = 8;
    document.write("Initial value: " + a + "<br>");

 a++; // increment
    document.write("Value after increment is: " + a + "<br>");

a = a + 10;
    document.write("Value after addition is: " + a + "<br>");

 a--; // decrement
    document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
    document.write("The remainder is: " + remainder + "<hr><br><br>");


        // Question 4 !

var ticketPrice = 600;

var totalTickets = 5 ;

var totalCost = ticketPrice * totalTickets;

document.write ("Total Cost To Buy " + totalTickets + " " +"Movie ticket is" + totalCost + "PKR. <hr> <br>");

        // Question 5 !

 var table = 6;
document.write("<h3>Table of " + table + "</h3>");
for (var i = 1; i <= 10; i++) {
 document.write(table + " x " + i + " = " + (table * i) + "<br>");
    }
 document.write("<hr><br>");

            // Question 6 !

var celsius = 30;

var farhenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + farhenheit + "°F <br>");

farhenheit = 60;
celsius = (farhenheit - 32) * 5/9;
document.write(farhenheit + "°F is " + celsius + "°C <hr><br><br>");

            // Question 7 !

var item1Price = 350;
var item2Price = 600;
var item1Qty = 5;
var item2Qty = 9;
var shipping = 150;

var cartTotal = (item1Price * item1Qty) + (item2Price * item2Qty) + shipping;

document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shipping + "<br>");
document.write("Total cost of your order is " + cartTotal + "<hr><br><br>");

            // Question 8 !

var totalMarks = 850;
var marksObtained = 498;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "% <hr><br><br>");

            // Question 9 !

var dollars = 15;
var riyals = 35;
var totalPKR = (dollars * 270.60) + (riyals * 45);

document.write("Total Currency in PKR: " + totalPKR + "<hr><br><br>");

         // Question 10 !

var result = ((5 + 5) * 10) / 2;
document.write("Result: " + result + "<h>r<br><br>");

        // Question 11 !

var currentYear = 2025;
var birthYear = 2007;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age2 + " or " + age1 + " years old. <hr><br><br>");

        // Question 12 !


var radius = 10;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<hr><br><br>");

        // Question 13 !

var snack = "lays";
var currentAge = 20;
var maxAge = 65;
var perDay = 4;
var totalSnacks = (maxAge - currentAge) * 365 * perDay;

document.write("You will need " + totalSnacks + " " + snack + " to last you until the rip old age of " + maxAge + ".<br><hr>");