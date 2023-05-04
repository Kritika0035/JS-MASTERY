// typesof operator.

// primitive data types: string, number, boolean, undefined, null, bigInt, symbol

let age =22;
let me = "kritika";
let agen = "22";

console.log(typeof(age + "")); // add "" to string n the number will be string

console.log(typeof(+agen)); // add + to a number and it will change into a string.


let hey = 18;
hey = String(hey); // change number to string.

console.log(typeof(hey));

let hii = 18;
hii = Number(hii); // change string to number.

console.log(typeof(hii));


// undefined: wen we dont assign a value to a var, or let.
//this cant be done with const.

let mssg ;
console.log(mssg);


//null: kuch nhi

console.log(typeof null); //object, which is a bug in js.


// BigInt: jb int ki limit se zada bada number use krna ho.
//BigInt ko BigInt se hi add kr skte hai.
// method to write BigInt:

let num = BigInt(123);
let samenum = 123n;

console.log(num); //123n
console.log(samenum); //123n



// Boolean and comparison operator

// boolean: true or false

console.log(7>9); //false
console.log(6>=6); //true
console.log("6" == 6); // true because it compare value, not data type.
console.log("6" === 6); // false because it compare data type also.



// truthy and falsy value

// flasy values: false, "", null, undefined, 0

var no = false;
if(no){
    console.log(no);
}
else{
    console.log("empty") //output : empty
}

var no = "";
if(no){
    console.log(no);
}
else{
    console.log("empty"); //output: empty
}

var no = null;
if(no){
    console.log(no);
}
else{
    console.log("empty") //ouput: empty
}

var no = 0;
if(no){
    console.log(no);
}
else{
    console.log("empty") //ouput: empty
}

var no = undefined;
if(no){
    console.log(no);
}
else{
    console.log("empty") //ouput: empty
}


// truthy values" "abc", 1, -1

var no = 1;
if(no){
    console.log(no); //usually output
}
else{
    console.log("empty") //ouput: empty
}




// termary operator: also known as conditional age.

var no = 18;
console.log(age >= 5? "coffee" : "milk");



// and, or operator

var myvar = "kritika";
var no = 35;

if(myvar[0]=="k" && no>35){
    console.log("true") //true
}
else{
    console.log("false")
}

if(myvar[0]=="k" || no>35){
    console.log("true") //true
}







