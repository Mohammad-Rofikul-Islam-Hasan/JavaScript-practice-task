//////////////// Task 1: Declare an array////////////

const fruits = ["Mango", "Jack fruit", "Black Barry", "Apple", "Orange"];

console.log(fruits[2]);

console.log(fruits[1] = "Jambura")

console.log(fruits);

///////////// Task 2: Add or remove elements//////////

const touristDestination = ["Cox's Bazar", "Kuakata", "Bandarban"];

touristDestination.push("Khagrachori");
touristDestination.unshift("Hatirjheel", "Moynamoti");
console.log(touristDestination);

touristDestination.pop();
console.log(touristDestination);

/// Task 3: Checking Array Membership with ‘includes ///

const books = ["Html", "CSS", "JavaScript "];

const bookIncludesOrNot = books.includes("JavaScript");
const confirmationMessage = books.includes("JavaScript")
  ? "This Book is in the list!"
  : "Oppps...No book found in this Name!";

console.log(bookIncludesOrNot, confirmationMessage);

////////// Task 4: Checking if it's an Array ///////////

const num1 = 25;
const text = "string";
const numbers = [1, 2, 3, 4, 5];

const checkArrayOrNot = Array.isArray(num1);
const checkArrayOrNot2 = Array.isArray(text);
const checkArrayOrNot3 = Array.isArray(numbers);

const confirmatiomMsg = Array.isArray(num1)
  ? "This is an array."
  : "No! This is not an array.";

const confirmatiomMsg2 = Array.isArray(text)
  ? "This is an array."
  : "No! This is not an array.";

const confirmatiomMsg3 = Array.isArray(numbers)
  ? "This is an array."
  : "No! This is not an array.";

console.log(checkArrayOrNot, confirmatiomMsg);
console.log(checkArrayOrNot2, confirmatiomMsg2);
console.log(checkArrayOrNot3, confirmatiomMsg3);

/////// Task 5: Combining Arrays //////////

const arr = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "h"];

const arr3 = arr.concat(arr2);

console.log(arr3);
