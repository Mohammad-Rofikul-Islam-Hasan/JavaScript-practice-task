//////////////// Task 1 /////////////////

const myBalance = 1000;
const orangePrice = 300;
const applePrice = 400;

const myReturnBalance = myBalance - (orangePrice+applePrice);

// console.log(myReturnBalance);



//////////////// Task 2 /////////////////

  const mathematics = 75.25;
  const biology = 65;
  const chemistry = 80;
  const physics = 35.45;
  const bangla = 99.50;

  const totalMarks = mathematics + biology + chemistry + physics + bangla;

  const averageMarks = (totalMarks/5).toFixed(2);

  // console.log(parseFloat(averageMarks));

////////////Another way to do it//////////////
  const marks = {
  mathematics : 75.25,
  biology : 65,
  chemistry : 80,
  physics : 35.45,
  bangla : 99.50
}

const totalMarksBySubject = Object.values(marks);

let TotalMarks = 0;
for (const marks of totalMarksBySubject){
  TotalMarks = TotalMarks + marks;
}

const AverageMarks = (TotalMarks / totalMarksBySubject.length).toFixed(2);

// console.log(parseFloat(AverageMarks))



//////////////// Task 3 /////////////////

const number = 119;

const remainder = number % 5;

// console.log(remainder);



//////////////// Task 4 /////////////////

var a = isNaN('11'); 
// false - Because '11' is a string, but JavaScript tries to convert it to a number before checking if it’s NaN. '11' can be converted to the number 11.

var b = isNaN(2-10); 
// false - Because -8 is a valid number.

// console.log(a,b);



