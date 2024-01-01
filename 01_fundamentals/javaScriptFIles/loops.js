

// while and for loops

//while loop

// let i = 0;
// while (i < 3) {
//   console.log( i );
//   i++;
// }


// let i = 3;
// while (i) { 
//   console.log( i );
//   i--;
// }

// do while loop

// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3)

//for loop
// for (let i = 0; i < 3; i++) { 
//     console.log(i);
//   }


// let i=0;

//   for (let i = 0; i < 3; i++) { 
//     console.log(i);
//   }
//   alert(i)



// skip parts
// let i = 0;

// for (; i < 3;) {
//   alert( i++ );
// }

//breaking a loop

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; 

//   sum += value;

// }
// alert( 'Sum: ' + sum );



// to display odd values
// for (let i = 0; i < 10; i++) {

   
//     if (i % 2 == 0) continue;
  
//     alert(i); 
//   }



  // Tasks

//   let i = 3;

// while (i) {
//   alert( i-- );
// }

// prefix and postfix

// let i = 0;
// while (++i < 5) alert( i );
//postFix
// let i = 0;
// while (i++ < 5) alert( i );

//to display even number 
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same)

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);
// alert(`You entered: ${num}`);

// code to output prime number


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}