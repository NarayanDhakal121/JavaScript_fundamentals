let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); 
alert( fruits[1] ); 
alert( fruits[2] );

//get last element at

let fruits1 = ["Apple", "Orange", "Plum"];

alert( fruits[fruits1.length-1] );

//Array methods push/pop/shift/unshift

//pop
let fruitse = ["Apple", "Orange", "Pear"];

alert( fruitse.pop() );

alert( fruitse ); 

//push 
let fruitss = ["Apple", "Orange"];

fruitss.push("Pear");

alert( fruitss );

//shift
let fruits2 = ["Apple", "Orange", "Pear"];

alert( fruits2.shift() ); 

alert( fruits2 )

//unshift
let fruits5 = ["Orange", "Pear"];

fruits5.unshift('Apple');

alert( fruits5 ); 

//internals

let fruits11 = ["Banana"]

let arr = fruits11; 

alert( arr === fruits11 ); 

arr.push("Pear"); 

alert( fruits11 );

//loops

let arr1 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr1.length; i++) {
  alert( arr1[i] );
}

//lengrh
let fruit = [];
fruit[123] = "Apple";

alert(fruit.length );

//new array()

// let arr = new Array(2); 

// alert( arr[0] ); 

// alert( arr.length );

//multidimensional array

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  alert( matrix[1][1] );

  // toString
//   let arr = [1, 2, 3];

// alert( arr ); 
// alert( String(arr) === '1,2,3' );

// dont compare array with ==
alert( 0 == [] ); 

alert('0' == [] )

// alert( 0 == '' ); 

// alert('0' == '' ); 

//tasks

let fruitsss= ["Apples", "Pear", "Orange"];

let shoppingCart = fruitsss;

shoppingCart.push("Banana");

alert( fruitsss.length ); 

//task

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//task

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();

// task

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

  //task
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); 
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
  alert( getMaxSubSum([-2, -1, 1, 2]) ); 
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 
  alert( getMaxSubSum([1, 2, 3]) ); 
  alert( getMaxSubSum([-1, -2, -3]) ); 



  //Arrays methods
  //Array.isArray

  alert(Array.isArray({}))
alert(Array.isArray([]))

//splice
// let arr = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(0, 3, "Let's", "dance");
// alert( arr )

//slice

// let arr = ["t", "e", "s", "t"];
// alert( arr.slice(1, 3) ); 
// alert( arr.slice(-2) );


// concat

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// alert( arr.concat(arrayLike) );

//for each
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });

  //searching in an array

  let arr = [1, 0, false];

alert( arr.indexOf(0) ); 
alert( arr.indexOf(false) ); 
alert( arr.indexOf(null) ); 

alert( arr.includes(1) );

//transform of an array
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);
  
//thisArgs 
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  let soldiers = users.filter(army.canJoin, army);
  
  alert(soldiers.length); 
  alert(soldiers[0].age); 
  alert(soldiers[1].age); 

