// let x = 1;

// x = -x;
// alert( x );

// let x = 1, y = 3;
// alert( y - x );

// alert( 5 % 2 ); 
// alert( 8 % 3 ); 
// alert( 8 % 4 ); 

// alert( 4 ** (1/2) ); 
// alert( 8 ** (1/3) );

// let s = "my" + "string";
// alert(s)

// alert( '1' + 2 );
// alert( 2 + '1' );

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); 
// alert( c );

// let counter = 0;
// counter++;
// ++counter;
// alert( counter );

// let counter = 1;
// alert( 2 * ++counter );

// Task





// let a = 1, b = 1;

// let c = ++a;
// alert(c)
// let d= b++;


// alert( ++a );


// alert( b++ ); 

// alert( a ); 
// alert( b ); 

// let a = 2;

// let x = 1 + (a *= 2);

// console.log(x);

//  let a = "" + 1 + 0
//  alert(a)
//  let b="" - 1 + 0
//  alert(b)
//  let c =true + false
//  alert(c)
//  let d =6 / "3"
//  alert(d)

// let e ="2" * "3"
// alert(e)

// let f = 4 + 5 + "px"
// alert(f)

// let g = "$" + 4 + 5
// alert( typeof g)

// let h ="4" - 2
// alert( typeof h)

// let i = "  -9  " + 5
// alert(i)

// let j ="  -9  " - 5
// alert( typeof j)

// let k =null + 1
// alert( typeof k)

// let l = undefined + 1
// alert(l)

// let m =" \t \n" - 2
// alert(m)

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a+b);
// alert (typeof(a + b));

// let a = +prompt("First number?", 1);// + helps in converting number to strings
// let b = +prompt("Second number?", 2);

// alert(a + b);



// Logical operators

// alert( null || 2 || undefined );
// alert( alert(1) || 2 || alert(3) );
// alert( 1 && null && 2 );
// alert( alert(1) && alert(2) );



// let age =prompt("enter your age")

// if (age >= 14 && age <= 90){
// alert("you are in range")
// }else{
//     alert('you are out of range')
// }


// let age =prompt("enter your age")

// if (age<14 && age >90){
// alert("you are in range")
// }else{
//     alert('you are out of range')
// }

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );

// if (null || -1 && 1) alert( 'third' );

// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }




// Nullish coalescing operator

// let user;

// alert(user ?? "Anonymous");

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// alert(firstName ?? lastName ?? nickName ?? "Anonymous");

// let height = 0;

// alert(height || 100); 
// alert(height ?? 100)


// let height = null;
// let width = null;


// let area = (height ?? 100) * (width ?? 50);

// alert(area);

// let x = (1 && 2) ?? 3; 

// alert(x);
