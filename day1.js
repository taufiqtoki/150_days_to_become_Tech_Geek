// Today: 28-01-2023

// Practice 1

/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
 help Harry calculate how much money the shopkeeper will return.
 Input:
 The first line of the input is the taka Harry’s mom gave him.
 The second line is the cost of 1 kg of oranges and 1 kg of apples.
 Output:
 Print the result. */

var takaInHand = 1000;
var applePrice = 250;
var orangePrice = 220;
var totalCost = applePrice + orangePrice ;
var remain = takaInHand - totalCost ;

// console.log("Shopkeeper will return " + remain + " taka");


// Practice 2

/* Practice problem 2 

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.*/

var marks = [75.25, 65, 80, 35.45, 99.50];
var average = (marks[0] + marks[1] + marks[2] + marks[3] + marks[4]) / marks.length;

// console.log(average.toFixed(2));


// Practice Problem 3

/* John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line. */

var string1 = "Amar Shonar Bangla";
var string2 = "\n  Ami tomay Valobashi";

// console.log(string1+string2);

