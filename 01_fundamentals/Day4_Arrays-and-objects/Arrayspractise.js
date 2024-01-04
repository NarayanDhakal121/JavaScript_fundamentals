

const superheroes = [
    {
        name: "Superman",
        height: 180,
        realName: "Clark Kent",
        superpower: "Super strength",
        gender: "Male"
    },
    {
        name: "Batman",
        height: 184,
        realName: "Bruce Wayne",
        superpower: "Martial arts",
        gender: "Male"
    },
    {
        name: "Wonder Woman",
        height: 176,
        realName: "Diana Prince",
        superpower: "Super strength and speed",
        gender: "Female"
    }
];


const name = superheroes.map(sh=>sh.name);
// alert(name);

const propertiesofSh= superheroes.map(sh=>{ 
    return{
name:sh.name,
realName:sh.realName

    }})

    // console.table(propertiesofSh);

const totalheight = superheroes.reduce((previousHeight, superheroes)=>{
return previousHeight  + superheroes.height
}, 0)

console.log( totalheight);

//filter methods

const heigtGreaterThan =  superheroes.filter((superhero)=>{
    return superhero.height>180
}
)

// console.log(heigtGreaterThan);

//another

const onlymale = superheroes.filter((superhero)=>{

return superhero.gender ==="Male"

})

// console.log(onlymale);


//sort method

const sortByCh = superheroes.sort((superheroes1, superheroes2)=>{

if(superheroes1.name > superheroes2.name){
    return -1
}

if(superheroes1.name < superheroes2.name){
    return 1
}
return 0;
 } )

//  console.log(sortByCh);

 
// console.log(superheroes.every((superheroe)=>{
//     return superheroe.height > 150
// }))

// some


console.log(superheroes.some((sur)=>{
 return   sur.gender 

} ))