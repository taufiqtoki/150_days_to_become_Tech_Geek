/* প্রাকটিস চ্যালেঞ্জ -১:  

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+. */

/* 
var alia = 95, dalia = 66, salia = 80, malia = 59, lilia = 47, jalaiya= 77;

if (alia >= 90 ) {
    console.log("Alia Got A+")
}
else if (alia >= 80) {
    console.log("Alia Got A")
}
else if (alia >= 70) {
    console.log("Alia Got B")
}
else if (alia >= 60) {
    console.log("Alia Got C")
}
else if (alia >= 50) {
    console.log("Alia Got D")
}
else {
    console.log("Alia Failed")
}

*/


/*প্রাকটিস প্রব্লেম-২: 

তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 
*/
 /*
var signal = "Red";
if (signal == "Green") {
    console.log("Cholo Jai")
}
else {
    console.log("Stop")
}
*/


/* নিচের লিংক টি ভিজিট করে প্র্যাক্টিস প্রব্লেম গুলো সমাধান করে ফেলোঃ

https://drive.google.com/file/d/1bfxye7A1p-BBJCQCXaiUetl_qyS2Vc1E/view

*/

// extra from GDRive pdf

/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

/* 

var fruits = ['Apple', 'Banana', 'Orange'];
console.log("Initial Fruit Names " + fruits);
var indexOfBanana = fruits.indexOf("Banana");
console.log("Index of Banana is Firstly "+ indexOfBanana);
fruits[1] = "Mango"
console.log("After replacing Banana with Mango now the string is " + fruits);
fruits.pop();
console.log("After removing last string of the array now " + fruits);
fruits.push("Watermelon");
console.log("After Adding another string on the array now " + fruits);
fruits.unshift("Papaya");
console.log("After Adding another string in the begining of the array now :" + fruits);
fruits.shift();
console.log("After Removing a string in the begining of the array now :" + fruits);

*/

// another from G driv pdf

/* 
1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.

*/


/* 

var no1 = 13;
var no2 = 79;
var no3 = 45;

if (no1 >= no2 && no3) {
    console.log("Largest number from given array is: "+ no1)
}
else if (no2 >= no1 && no3) {
    console.log("Largest number from given array is: "+ no2)
}
else {
    console.log("Largest number from given array is: "+ no3)
}

*/

/* 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal

*/

