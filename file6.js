//OBJECTS

const person = {name:"kriti", age:"22"};
console.log(person); 
console.log(person.name);
console.log(person["name"]); //jb key k beech gap ho

person.gender = "female";
console.log(person);

const person2 = {
    name: "aadi",
    age: "22",
    hobbies: ["dance", "reading", "eating"] //include array into object
}

console.log(person2.hobbies);


// HOW TO ITERATE OBJECT

//FOR IN LOOP

for (let key in person){
    console.log(person[key]) //[] is used so that we can access the key
}

//OBJECT.KEYS

for(let key of Object.keys(person)){
    console.log(person[key]);
}


//COMPUTED PROPERTIES

const key1 ="obj1";
const key2 ="obj2";

const value1 ="val1";
const value2 ="val2";


const obj ={};

obj[key1] = value1;
obj[key2] = value2;

console.log(obj);


//SPREAD OPERATORS

const obj1 ={
    key1:"1",
    key2:"2"
}

const obj2 ={
    key2:"5",
    key3:"3",
    key4:"4"
}

const newobj = {...obj1, ...obj2}; //obj2 ka element over power kr lega
const newobj2 = {...obj2, ...obj1}; //obj2 ka element over power kr lega
const newobj3 = {...obj2, ...obj1, key69:"value"};

console.log(newobj);
console.log(newobj2);
console.log(newobj3);


const object = {..."asjdknfdsfn"};  //khud se sare element ko key:value pair me divide kr lega
console.log(object);


//OBJECT DESTRUCTION

const band ={
    bandname:"ledzip",
    song:"aakhen",
    nextsong:"kashmir",
    year:"2003"
}

// const {bandname, song} = band; 
// console.log(bandname);

const {bandname, song, ...restproperties} = band; //use ...redfjn to include rest properties in the object
console.log(restproperties);
console.log(bandname);


// OBJECT INSIDE AN ARRAY #important

const user=[
    user1={id:"1", name:"aaditya", age:"22"},
    user2={id:"2", name:"komal", age:"21"},
    user3={id:"3", name:"riya", age:"19"}
]

console.log(user);
console.log(user1);
console.log(user1.id);
