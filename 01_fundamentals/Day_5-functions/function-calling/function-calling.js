

//function calling

const factorial = function(n){
    if(n===0||n===1){
        return 1;
    }else{
        return n*factorial(n-1)
    }
}

// console.log(factorial(3))
// console.log(factorial(5))


// using map function

const number=[4,7,5,10];
// console.log(number.map(factorial))



//------function hoisting---------

// function hoisting means function calls before declearation and js allows us because js interprets the hoists the entire function decleration on the top of the current scope
// hoisting only works with function decleration 
// i.e

// console.log(square(5))

function square(n){
    return n*n

}


// not with function expression

// console.log(square2(4))

const square2= function(n){
    return n*n
}


// scopes

let num1=5;
let num2=20;
let name='narine'


// function defined in global scope
function Mult(){

    return num1*num2
}

// console.log(Mult())


//  nested function

function getScore(){
   let num1=4;
   let num2=5;

   function Add(){
   return (`My name is ${name} and my score is ${num1+num2}`)
   }
  
   return Add()

}

// console.log(getScore())

// Scope and function Stack
//Recursion

function loop(x){
if(x>10){
    return x
}
// console.log(x)
 loop(x+1);
}
(loop(0))

//

function foo(n){
    if(n<1){
        return;
    }
// console.log((`begins: ${n}`));
   foo(n-1);
//    console.log((`ends : ${n}`));
}
foo(5)

// Nested function and closures

function addSquare(a, b){
    function square(x){
        return x*x;
        
    }
   
   return {result: square(a)+ square(b), square:square}
}
var result= (addSquare(2, 3))
console.log(result)
console.log(result.square(5));


// you can call the outer function and specify arguments for both the outer and inner function

function outside(x){
    function inside(y){
        return x+y;
    }
    return inside
}

const add = outside(3);

// console.log(add(4));

// closures

function createGreeting(greeting){
    return function(name){
        return `${greeting}, ${name}!`;
    };
}
const sayHello = createGreeting('hello');
const sayHi = createGreeting('Hi');


// console.log(sayHello('Aman'));
// console.log(sayHi('prasun'));

//using the argumental objects

function myConcat(seperator){
    let result="";
    for (let i = 1; i < arguments.length; i++) {
         result += arguments[i]+seperator;
   
}
return result
}


// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));


//function parameter

//default

// function multiply(a, b) {
//     b = typeof b !== "undefined" ? b : 3;
//     return a * b;
//   }
  
//   console.log(multiply(5));

function multiply(a, b=1) {
return a * b;
}


//rest parameters

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
//   console.log(arr);

  //i.e

  function adding(adder, ...theArgs){
return theArgs.map((x)=> adder+x);
  }
  const arr2 = adding(2, 3, 4, 5)
//   console.log(arr2)

//Arrow functions

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

// console.log(a2);

const a3 = a.map((s) => s.length);

// console.log(a3)

//use of this keyword 

// const person = {
//     firstName: "Alice",
//     lastName: "Smith",
//     fullName: () => {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
  
//   console.log(person.fullName()); 
  
const person = {
    firstName: "Alice", 
    lastName: "Smith",
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.fullName()); 
  
  