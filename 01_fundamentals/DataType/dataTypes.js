
// task for dataTypes

// let name = "Ilya";

// console.log( `hello ${1}` );

// console.log( `hello ${"name"}` );

// console.log( `hello ${name}` );
// console.log(name);

// DataTypes
//quotes

function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`);

  

  let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList);

//special Characters

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList);

// string length
alert( `My\n`.length );



let str = `Hello`;
alert( str[0] ); 
alert( str.at(0) ); 

alert( str[str.length - 1] ); 
alert( str.at(-1) )

for (let char of "Hello") {
    alert(char);
  }


  //strings are unmutables

//   let str = 'Hi';

// str = 'h' + str[1]; 

// alert( str );

//changing the cases

alert( 'Interface'[0].toLowerCase() );
alert( 'Interface'[5].toUpperCase() );

//searching of substrings

// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); 
// alert( str.indexOf('widget') ); 

// alert( str.indexOf("id") );

//getting of a substring
// let str = "stringify";
// alert( str.substr(-4, 2) );

//comparing string
alert( 'a' > 'Z' );

//comparing string

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );



//Tasks

let newStr = str[0].toUpperCase() + str.slice(1);

//tasks

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); 

  //tasks

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('abc') || lowerStr.includes('tututt');
  }
  
  alert( checkSpam('buy abc now') );
  alert( checkSpam('free tututt') );
  alert( checkSpam("innocent rabbit") );
