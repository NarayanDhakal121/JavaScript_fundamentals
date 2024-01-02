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


 // copying the referance

//  let a = {};
// let b = a; 

// alert( a == b ); 
// alert( a === b );


let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; 
  for (let key in user) {
    clone[key] = user[key];
  }
  clone.name = "Pete";
  
  alert( user.name ); 

  // object.assign method

  let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);
alert(user.name);
alert(user.canView); 
alert(user.canEdit);

//Nested cloning

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes );
  user.sizes.width = 60;
  alert(clone.sizes.width);


  // structural clone

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); 
  user.sizes.width = 60;   
  alert(clone.sizes.width);
  
  //Garbage collection
  //interlinked objects

  function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

  console.log(family);


  // This keyword 

  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert(this.name);
    }
  
  };
  
  user.sayHi();


  //Arrow function this

  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi();


// Tasks using "this in object literals"

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );



//Task 2 create a Calculator

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Task 3  

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();


//Tasks of operator COnstructor and new

//Task 1

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );

//Task 2
//calculator

// function Calculator2() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator2 = new Calculator2();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// task 3

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);




//optional chaining

let user = null;

alert( user?.address ); 
alert( user?.address.street );

//short-circuting

let user = null;
let x = 0;

user?.sayHi(x++); 

alert(x);

//other varients
// let userAdmin = {
//   admin() {
//     alert("I am admin");
//   }
// };

// let userGuest = {};

// userAdmin.admin?.(); 

// userGuest.admin?.()



let key1 = "firstName";

let userx = {
  firstName: "John"
};

let usery = null;

alert( userx?.[key] ); 
alert( usery?.[key] );





//symbol types

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); 


//Hidden properties

let user = { 
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] );



//Global symbol

// let id = Symbol.for("id"); 

// let idAgain = Symbol.for("id");
// alert( id === idAgain );

//objects to premative conversion

// let obj1 = { value: "123" };
// let obj2 = { value: "456" };
// let isGreater = obj1.value > obj2.value;

// console.log(isGreater)


//toSring/valueOf
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

alert(user); 
alert(+user); 
alert(user + 500); 

//further convention

let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2); 