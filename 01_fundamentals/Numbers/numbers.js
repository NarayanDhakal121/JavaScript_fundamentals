//methods of primitives

// let john = {
//     name: "John",
//     sayHi: function() {
//       alert("Hi buddy!");
//     }
//   };
  
//   john.sayHi();


// null or unddefined
alert(null.test); 

//A primitavive as an object

let str1 = "Hello";

alert( str1.toUpperCase() );



//task

let str = "Hello";

str.test = 5; 

alert(str.test);


//Numbers
let billion = 1e9;  

alert( 7.3e9 ); 


//toString(base)

let num = 255;

alert( num.toString(16) );  
alert( num.toString(2) );

//Roundings

let num3= 1.23456;

alert( Math.round(num3 * 100) / 100 );


//imprecise calculations
alert( 1e500 );
alert( 0.1 + 0.2 == 0.3 );
alert( 0.1 + 0.2 );


//isfinite and isNan
alert( isNaN(NaN) ); 
alert( isNaN("str") );

// other math function
alert(Math.random());
alert( Math.max(3, 5, -10, 0, 1) );
alert( Math.min(3, 5, -10, 0, 1) );
alert( Math.pow(2, 10) );

//Tasks

//add to sum
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

//task
alert( 6.35.toFixed(20) );
alert( (6.35 * 10).toFixed(20) );
alert( Math.round(6.35 * 10) / 10 );

//task 3 repeat until the input is number
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);

  //task 4 ocasionally infinite loop
  let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

// task random number from min to max

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );

  //task random integer from min to max
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );