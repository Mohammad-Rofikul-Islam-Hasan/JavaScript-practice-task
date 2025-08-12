////////////////////// for //////////////////////
//  1: commitment //

for (let num = 1; num <= 60; num++) {
  console.log(
    num,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}

// 2: odd even //

// odd
for (let num = 61; num <= 100; num++) {
  if (num % 2 === 1) {
    console.log(num);
  }
}
// even
for (let num = 78; num <= 98; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 3: sum of odd even numbers //
let sumOfOdd = 0;
for (let num = 91; num <= 129; num++) {
  if (num % 2 === 1) {
    sumOfOdd = sumOfOdd + num;
  }
}

console.log(sumOfOdd);

let sumOfEven = 0;

for (let num = 51; num <= 85; num++) {
  if (num % 2 === 0) {
    sumOfEven = sumOfEven + num;
  }
}

console.log(sumOfEven);

// 4: multiplication table //

let tableOfNum = 9;

for (let num = 1; num <= 10; num++) {
  console.log(9, "*", num, "=", tableOfNum * num);
}

// 5: countdown //
for (let num = 81; num >= 65; num--) {
  console.log(num);
}

///////////////////// while
//  1: commitment //
let number = 1;
while (number <= 60) {
  console.log(
    number,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
  number++;
}

// // 2: odd even //

// // odd

let number1 = 61;
while (number1 <= 100) {
  if (number1 % 2 === 1) {
    console.log(number1);
  }
  number1++;
}

// // even

let number2 = 78;
while (number2 <= 98) {
  if (number2 % 2 === 0) {
    console.log(number2);
  }
  number2++;
}

// // 3: sum of odd even numbers //

// Odd 
let num5 = 91;
let sumOfOdd1 = 0;

while (num5 <= 129) {
  if (num5 % 2 === 1) {
    sumOfOdd1 = sumOfOdd1 + num5;
  }
  num5++;
}

console.log(sumOfOdd1);

// Even 
let num4 = 51;
let sumOfEven1 = 0;
while (num4 <= 85) {
  if (num4 % 2 === 0) {
    sumOfEven1 = sumOfEven1 + num4;
  }
  num4++;
}
console.log(sumOfEven1)

// // 4: multiplication table //

let tableOfNum1 = 9;
let num3 = 1;
while (num3 <= 10) {
  console.log(9, "*", num3, "=", tableOfNum1 * num3);
  num3++;
}

// // 5: countdown //
let n = 81;
while (n >= 65) {
  console.log(n);
  n--;
}

//////////////////// break
/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
for (let num = 1; num <= 200; num++) {
  console.log(num);
  if (num === 100) {
    break;
  }
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
let num = 1;

while (sum <= 100) {
  sum = sum + num;
  console.log(sum);
  if (sum >= 100) {
    break;
  }
  num++;
}

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let num = 1; num <= 100; num++) {
  if (Math.sqrt(num) % 1 === 0) {
    console.log(num);
    break;
  }
}

/////////////////// continue
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let num = 1; num <= 40; num++) {
  if (num % 2 === 1) {
    continue;
  }
  console.log(num);
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let num = 55; num <= 85; num++) {
  if (num % 5 === 0) {
    continue;
  }
  console.log(num);
}
