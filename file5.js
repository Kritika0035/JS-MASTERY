// Array

let fruit = ["apple", "banana", "cherry", "orange", "grapes"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);

fruit[1] = "mango"
console.log(fruit);

console.log(typeof fruit);
console.log(Array.isArray(fruit));

fruit.push("banana");  //add to the last (fast)
console.log(fruit);

fruit.pop();  //remove from th last (fast)
console.log(fruit);

fruit.unshift("kiwi");  //add in the starting
console.log(fruit);

fruit.shift()  //remove from starting
console.log(fruit);


let fruit2 =  fruit.slice(0);  //to make a new array (fast)
console.log(fruit2);

let fruit3 = [].concat(fruit); //to make new array (used mostly)
console.log(fruit3);

let fruit4 = [...fruit, "lichi", "stawberry"];
console.log(fruit4);

console.log(fruit.length);



//CONSTANT IN ARRAY

const num = ["1", "2", "3", "4", "5"]; //const mean location constant h (mostly use bcoz ek hi bar banenge)
num.push("6");
console.log(num);
num.pop();
console.log(num);


//FOR OF LOOP IN ARRAY

const names = ["ram", "ajay", "akash", "ravi"];

console.log(`the array is [ ${names} ]`);
for(let name of names){
    console.log(name);
}

for(let i in names){
    console.log(names[i]);
}


//ARRAY DESRUCTING

const array = ["val1", "val2", "val3"];

let [var1, var2] = array;
console.log(var1);
console.log(var2);

let [var5, , var3] = array; // to skip a element
console.log(var3);

let [var6, var7, ...newarray] = array; //to add all the other elements
console.log(newarray);

