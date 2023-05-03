//string indexing

// k r i t i k a
// 0 1 2 3 4 5 6

let Fname = "kritika"
console.log(Fname[3]);

console.log(Fname.length); //shows the length of the string.

console.log(Fname[Fname.length -1]); //shows the value of last index.
console.log(Fname[Fname.length -3]); //shows the value of last third index.


// trim()

// it is used to remove the spaces from a string.
// the string after needs to be stored in another variable or the same one, it need to be updated.

let fname = "  kritika   ";

console.log(fname.length);
fname = fname.trim();
console.log(fname.length);



//toUpperCase() and toLowerCaer()

// change the string to upper or lower case.
// it also need to be updated as string is immutable.
 
let Name = "KriTika"

console.log(Name);
Name = Name.toUpperCase(); // change all the upper case
console.log(Name);
Name = Name.toLowerCase(); // change to lower case
console.log(Name);



// slice()

//slicing the string on the bass of indexes.

let Value ="Designing";

console.log(Value.slice(4)); //print from 4 to last index.
console.log(Value.slice(2,6)); //print from 2 to 5 index.