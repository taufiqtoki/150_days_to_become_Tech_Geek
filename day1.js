// Today: 28-01-2023

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
console.log("Shopkeeper will return " + remain + " taka");