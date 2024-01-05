

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

