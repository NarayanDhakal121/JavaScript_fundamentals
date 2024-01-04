// practise 1

const object1 = {
    user: "sameer",
    nationality: "Nepal",
    profession: "Software Enginneer",
    myBio() {
        console.log(`My name is ${this.user}. I'm a  ${this.profession} from ${this.nationality}`)
    }
}
console.log(object1.user); 
console.log(object1.nationality);
console.log(object1.profession);  
console.log(object1.myBio())


// practise 2

const object2 = { 
    users: ["Anil", "James", "Smith"], 
    professions: { 
        anil: "software engineer", 
        james: "Player", 
        Smith: "technical writer" 
    } 
}; 
console.log(object2.users);
console.log(object2.professions);
object2.ages = [30, 32, 40];
object2["summary"] = `Object2 has ${object2.users.length} users`;
console.log(object2);


//practise 3


const object3 = {};
const gadget = prompt("enter a gadget type"); 
object3[gadget] = ["jbl", "sony"]; 
console.log(object3) 

// practise 4

const object3 = {};
const computer = "brands"
object3.computer = ["hp", "dell", "apple"]
console.log(object3.brands); 
console.log(object3.computer)

object3[computer] = ["hp", "dell", "apple"]
console.log(object3.brands) 

//practise 5

object3["users height"] = [5.6, 5.4, 6.0];  
console.log(object3["users height"])

//practise 6 using Construtor

function Profile(name, age, nationality) { 
    this.name = name; 
    this.age = age; 
    this.nationality = nationality; 
    this.bio = function () { 
        console.log(`My name is ${this.name}. I'm ${this.age} years old. I'm from ${this.nationality}`) 
    } 
};

const sameer = new Profile("Sameer", 20, "Nepal" );
console.log(sameer.bio());

//practise  7

let x = 10;
let y = x;
x = 20;
console.log(x); 
console.log(y); 

let object4 = { 
    name: "kamal", 
    age: 30 
}; 
let object5 = object4; 
console.log(object5);  
object4.name = "Ram"; 
console.log(object5); 
console.log(object4 === object5);

//spread operator
let object6 = {...object5}; 
object5.name = "james"; 
console.log(object5); 
console.log(object6); 
console.log(object5 === object6);

//object.assign

let object7  = Object.assign({}, object6); 
console.log(object7); 
console.log(object7); 

console.log(object6 === object7); 
object6.age = 40
console.log(object6); 
console.log(object7)

//practise 8

let objectX = {
    name: 'A', 
    age: 10,
    gadgets: { 
        brand: ["apple", "sony"]
    }
};

let objectY = {...objectX};
objectY.name = "B";
objectY.gadgets.brand[0] = "hp";
console.log(objectX);

console.log(objectY);


//practise 9

let objectZ = {
    name: "A",
    Pronuon: "he",
    age: 10
};
for(let property in objectZ) {
    console.log(`${property}: ${objectZ[property]}`)
}