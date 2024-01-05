// function practises and function defination


function myfunction(theObject){
theObject.make="toyota";
}

const mycar={
    make:"honda",
    model:"accor",
    year: 1999
}

// console.log(mycar.make)

myfunction(mycar)

// console.log(mycar.make)


// in case of array

function myArray(theArray){
   theArray[0]=40;
}

const arr=[45]
// console.log(arr[0])
myArray(arr)
// console.log(arr[0])

// function expression


const square = function(number){
    return number*number
}
// console.log(square(5))

// 

const Add = function(number1, number2){
return number1+number2;
}

// console.log(Add(2, 4))

//

const fact = function(n){
return n<2?1:n*fact(n-1)
}

console.log(fact(5))

// function to print cubes

// function map(f, a){
// const result = new Array(a.length)
// for (i=0; i<= i.length; i++){

//     result[i]= f(a(i))

// }
// return result;
// }


// const cubes = function(n){
//     return n*n*n
// }

// const number = [2, 4,6,8]
// console.log(map(cubes, number))

// console.log(cubes(2));
// console.log(cubes(4));
// console.log(cubes(6));
// console.log(cubes(8));

// another away by using inbuilt map function in javascript

const cube= function(n){
    return n*n*n
}

const numbers =[2,3,4,5,6,9]

const ans= numbers.map(cube)
console.log(ans)