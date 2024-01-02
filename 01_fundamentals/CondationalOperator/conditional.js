// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//     alert( 'You are right!' )
// }else{
//     alert("wrong")
// }

// let year = prompt(" guess the year")

// if (year == 2015) {
//     alert( "That's correct!" );
//     alert( "You're so smart!" );
//   }




//  let accessAllowed;

// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );



// tasks 



// if ("0") {
//     alert( 'Hello' );
//   }

//   if ("a") {
//     alert( 'false' );
//   }


  //2 

//   let value = prompt('What is the "official" name of JavaScript?', '');

//   if (value == 'ECMAScript') {
//     alert('Right!');
//   } else {
//     alert("You don't know? ECMAScript!");
//   }

  //3

//   let value = prompt('Type a number', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

//4 

// let a = Number(prompt("Enter the first number:"));
// let b = Number(prompt("Enter the second number:"));

// let result;


// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }


// alert(result);


// let a = Number(prompt("Enter the first number:"));
// let b = Number(prompt("Enter the second number:"));

// let result = (a + b < 4) ? 'Below' : 'Over';

// alert(result)





let login = prompt("who you are")

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

alert(message)

