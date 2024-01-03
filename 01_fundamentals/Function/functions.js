// javaScript functions

// function showMessage() {
//     alert( 'Hello everyone!' );
//   }


//   function showMessage() {
//     let message = "Hello, I'm JavaScript!"; 
  
//     alert( message );
//   }
  
//   showMessage();
  
//   alert( message ); 

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage();

// let userName = 'John';

// function showMessage() {
//   userName = "Bob";

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); 
// showMessage();

// alert( userName );



//parameters in functions
// function showMessage(from, text) {
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); 
//   showMessage('Ann', "What's up?"); 

// function showMessage(from, text) {

//     from = '*' + from + '*';
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); 
//   alert( from );

// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
//   }
  
//   showMessage("Ann");

// use of operators

// function showMessage(text) {
//     text = text || 'empty';
//     alert(text);
//   }
  
//   showMessage('hello');
  

//use of nullish coalescing operator ?? in function
// function showCount(count) {
   
//     alert(count ?? "unknown");
//   }
  
//   showCount(0); 
//   showCount(null);
//   showCount();


//return a value

// function sum(a, b) {
//     return a + b;
//   }
  
//   let result = sum(1, 2);
//   alert( result );
  

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

//function to check prime numbers

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); 
//     }
//   }

// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }



// tasks of function

// let age = 15;

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// let result = checkAge(age);
// alert(result);

// let age=20;

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }
//   let result = checkAge(age);
//   alert(result);

// let age = 10;

// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }

// let result = checkAge(age);
// alert(result);


// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

// let number1 = 10;
// let number2 = 20;

// let minimum = min(number1, number2);

// console.log(`The minimum of ${number1} and ${number2} is ${minimum}.`);

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
//   } else {
//     alert( pow(x, n) );
//   }


// function expression

// function sayHi() {  
//     alert( "Hello" );
//   }
  
//   let func = sayHi;    
  
//   func(); 
//   sayHi();

// function practise

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   ask("Do you agree?", showOk, showCancel);

// sayHi("John");

// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }


// let age = prompt("What is your age?", 18);

// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }
// welcome();

// Arrow functions

// let sum = (a, b) => a + b;
// let sum = function(a, b) {
//   return a + b;
// };
// alert( sum(1, 2) ); 
// let double = n => n * 2;
// alert( double(3) );

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//multiline arrow function

let sum = (a, b) => {  
    return result; 
  };
  
  alert( sum(1, 2) );

  //Taks

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );


// 

//practises for javascript function

let x = function (num) { return num * num };
console.log(x(4));

let y = x(3);
console.log(y);

// i.e 2
// javascript variable scopes
let a = "hello";
function greet() {
    a = 3;
}
console.log(a);

greet();
console.log(a); 

//local scopes
let c= "hello";

function greet() {
    let b = "World"
    console.log(c + b);
}

greet();
console.log(c+ b);

//let in block scoped

// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {
        let c = 'hello';
        console.log(a + ' ' + b + ' ' + c);
    }
    console.log(a + ' ' + b + ' ' + c);
}

greet();

//javascript hoisting

console.log(test);
var test;


// i.e 2

a = 5;
console.log(a);
var a;

//i.e 3
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); 
    var b;
}
greet(); 
console.log(b);

//i.e 4 function hoisting

greet();

function greet() {
    console.log('Hi, there.');
}

// recursion

function countDown(number) {
  console.log(number);
  const newNumber = number - 1;

  if (newNumber > 0) {
      countDown(newNumber);
  }
}

countDown(100);

//i.e 2

function factorial(x) {

  if (x === 0) {
      return 1;
  }
  else {
      return x * factorial(x - 1);
  }
}

const num = 3;
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

//function that returns the function

function functionReturnsF() {
    return function() {
        return "This is a function that returns a function";
    }
}
console.log(functionReturnsF()());

// function with rest parameters
function functionWithRP(...params) {
    return `function with rest parameters: ${params}`;
}
console.log(functionWithRP("param1", "param2", "param3"));