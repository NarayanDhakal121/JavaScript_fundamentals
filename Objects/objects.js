// let user = new object(); //object COnstructor

// let user1 ={}// Object literals


// Literals and properties

// let user3 ={
// name: "Ram",
// age: 30 ,
// "likes birds": true 

// }

// console.log(user3.age);
// console.log(user3.name);
// // square bracket 
// console.log(user3["likes birds"]);
// console.log(delete user3["likes birds"]);

// key variable
let usera = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
 console.log(( usera[key] ));


// .notation

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key )



  //computed properties
  let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5,
};

console.log(( bag.apple ))


// property value shorthand


function makeUser(name, age, city) {
    return {
      name: name,
      age: age,
      city: city
    };
  }
  
  let user5 = makeUser("John", 30, "city");
  alert(user5.name)


//property name limitation

//   let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
  
//   alert( obj.for + obj.let + obj.return );



let obj = {
    0: "test" 
  };

  alert( obj["0"] ); 
  alert( obj[0] );

let obj2 = {};
obj.__proto__ = 5; 
alert(obj2.__proto__);


//property eistence test "in operator"

let user1 = {};

alert( user1.noSuchProperty === undefined );

let user2 = { name: "John", age: 30 };

alert( "age" in user );
alert( "blabla" in user );

// the for....in loop

let user3 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    alert( key );  
    alert( user3[key] ); 
  }

// ordered like property
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); 
  }


// integer property
alert( String(Math.trunc(Number("49"))) ); 
alert( String(Math.trunc(Number("1.2"))) );

// for non-integer properties are listed in creation order
let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; 
  user.fullname = "Ramesh Aryal"
  
  
  for (let prop in user) {
    alert( prop ); 
  }




// tasks in this section


let user = {};
alert(user.name = "John");
alert(user.surname = "Smith");
alert(user.name = "Pete");
alert(delete user.name);

// task 2 check for emptiness


function isEmpty(obj) {
    for (let key in obj) {
    
      return false;
    }
    return true;
  }

  // sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);


//multiply numeric property value by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}

 let obj={
    name: "John",
    age: 30,
    height: 170
 };

 multiplyNumeric(obj);