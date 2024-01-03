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

// .......Tasks..........

// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// alert( fruits.length );

//......tasks........
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//.......tasks..........

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2]();

// ........tasks.......

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

// .......tasks................

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

alert( getMaxSubSum([-1, 2, 3, -9])); 
alert( getMaxSubSum([-1, 2, 3, -9, 11])); 
alert( getMaxSubSum([-2, -1, 1, 2])); 
alert( getMaxSubSum([100, -9, 2, -3, 5])); 
alert( getMaxSubSum([1, 2, 3])); 
alert( getMaxSubSum([-1, -2, -3])); 


//transform an array

let countries = ['india', 'China', 'Nepal'];
alert( countries.sort( (a, b) => a > b ? 1 : -1));
alert( countries.sort( (a, b) => a.localeCompare(b))); 

//Array.isArray
alert(typeof {});
alert(typeof []);


//....tasks.....

// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); 
// alert( arr );

//.......tasks

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 

alert( arr ); 


//.......tasks..........

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );


// tasks

function copySorted(arr) {
  return arr.slice().sort();
}

let arrey = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arrey);

alert( sorted );
alert( arrey );


// tasks

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john, pete, mary ];

let usersMapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );


//........Tasks.....
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);


//Arrays questions for practise pop method

// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
// dailyActivities.pop();
// console.log(dailyActivities);
// const removedElement = dailyActivities.pop();

// console.log(removedElement);
// console.log(dailyActivities);  

//Arrays questions for practise shift  method

// let dailyActivities1 = ['work', 'eat', 'sleep', 'exercise'];
// dailyActivities.shift();
// console.log(dailyActivities);
// const removedElement1 = dailyActivities.shift();

// console.log(removedElement1);


//Arrays .length method//.sort//tofind index of //slice //contatination
let dailyActivities = ['sleep', 'work', 'exercise'];
let newRoutine = ['eat'];

console.log(dailyActivities.length);
dailyActivities.sort();
console.log(dailyActivities); 
const position = dailyActivities.indexOf('work');
console.log(position); 
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); 
const routine = dailyActivities.concat(newRoutine);
console.log(routine);


//push method

// let arr = ['h', 'e'];
// let arr1 = arr;
// arr1.push('l');

// console.log(arr); 
// console.log(arr1);

// for each

let students = ['John', 'Sara', 'Jack'];
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

//eg 2

const numbers = [65, 44, 12, 4];
let sum = 0;

numbers.forEach(function(item) {
  sum += item;
});

console.log(sum); 

// eg 3

let students = ['John', 'Sara', 'Jack'];
students.forEach(myFunction);

function myFunction(item, index, arr)
 {
    arr[index] = 'Hello ' + item;
  }
console.log(students);

//for each with arrow function

// const fruits = ['apple', 'banana', 'mango'];

// fruits.forEach((fruit, index) => {
//   console.log(`The fruit at index ${index} is ${fruit}`);
// });

// eg 2

// const students = [
//   { name: 'John', grade: 8 },
//   { name: 'Sara', grade: 9 },
//   { name: 'Jack', grade: 10 },
// ];

// students.forEach(student => {
//   console.log(`${student.name} is in grade ${student.grade}`);
// });

//for loop to forEach
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

for (let i = 0; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);

//using forEach
// const arrayItems = ['item1', 'item2', 'item3'];
// const copyItems = [];
// arrayItems.forEach(function(item){
//   copyItems.push(item);
// })

// console.log(copyItems);

// iterate through set using foreEach()
const set = new Set([1, 2, 3]);
set.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}

//forEach with map
// we can iterate through map using forEach()
let map = new Map();
map.set('name', 'Jack');
map.set('age', '27');
map.forEach (myFunction);

function myFunction(value, key) {
    
    console.log(key + '- ' + value);
}
