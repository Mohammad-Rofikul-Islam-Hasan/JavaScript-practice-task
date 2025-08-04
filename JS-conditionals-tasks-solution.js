/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 550;

if (burgerPrice > 500) {
  console.log("You have got a free coke.");
} else {
  console.log("You have to pay 30tk for coke.");
}

///////////////////////////

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 181; //kg
const height = 1.73; //meter

const bmi = (weight / (height * 2)).toFixed(2);

if (bmi < 18.5) {
  console.log("You are underweight.");
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal");
  } else {
    if (bmi >= 25 && bmi <= 29.9) {
      console.log("you are overweight.");
    } else {
      console.log("you are obese.");
    }
  }
}




////////////////////////////////

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


const studentScore = 90;

if(studentScore<=100 && studentScore >= 90){
  console.log("Your Result: A")
}
else if(studentScore <= 89 && studentScore >= 80){
    console.log("Your Result: B")
}
else if(studentScore <= 79 && studentScore >= 70){
    console.log("Your Result: C")
}
else if(studentScore <= 69 && studentScore >= 60){
    console.log("Your Result: D")
}
else{
  console.log("You Result: F")
}




////////////////////////////////////////
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myMarks = 90;
const friendsMarks = 60;


if(myMarks > 80){
    if(friendsMarks >= 80){
      console.log("Go for a lunch.")
    }
    else if(friendsMarks < 80 && friendsMarks >= 60){
      console.log("Tell your friend, good luck next time.")
    }
    else if(friendsMarks < 60 && friendsMarks >= 40){
      console.log("keep your friend's message unseen.")
    }
    else{
      console.log("Block your friend")
    }
}
else{
 console.log("Go to home,sleep and act sad")
}


//////////////////////////////////

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 60;
const num2 = 70;


const result = num1 > num2 ? num1 * 2 : num1+num2;

console.log(result);



///////////////////////////////////////

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 59;
const isStudent = true;
let ticketPrice = 800;

if (age < 10){
  console.log("Free");
}
else if (age >= 60){
  ticketPrice = ticketPrice - ( ticketPrice*15/100);
  console.log("Ticket price:", ticketPrice);
}
else{
  if(isStudent){
    ticketPrice = ticketPrice - (ticketPrice*50/100);
    console.log("Ticket price:", ticketPrice);
  }
}







