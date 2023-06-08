// IMPORTANT ARRAY METHODS

//FOREACH METHOD

const number = ["1", "2", "3", "4", "5"];

function multiplyby2(num, index){
    console.log(`index is ${index}`);
    console.log(`${num} * 2 = ${num*2}`);
}

for(let i=0;i<number.length; i++){
    multiplyby2(number[i], i);
}

console.log("------------------------");
console.log("------------------------");
console.log("------------------------");


number.forEach(multiplyby2);   //for as for loop

const users = [
    {firstname:"aryan", age:"23"},
    {firstname:"rani", age:"21"},
    {firstname:"shreya", age:"24"},
    {firstname:"akash", age:"23"},
    {firstname:"naksh", age:"21"}
]

users.forEach(function(user){
    console.log(user.firstname);
})


//===========================================================//


//MAP METHOD

const numb = [3,4,5,6];

const sqr = function(number){
    return number*number;
}

const sqrnum = numb.map(sqr); //hmesa new func bnaega
console.log(sqrnum);


//======================================================================================//



//FILTER METHOD


const array = [3,4,5,6,7,8,9];

const iseven = function(n){
    return n%2==0;
}

const evennum = array.filter(iseven);
console.log(evennum);



//============================================================================//



//REDUCE METHOD

const arr=[2,3,4,5];



const sum = arr.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue;
});
console.log(sum);

// accumulator, currentvalue, return
// 1               2            3
// 3               3            6
// 6               4            10
// 10              5            15


//=======================================================================================//


//SORT METHOD

const value=[5,9,1200,400,2700];
value.sort();
console.log(value);

//=====================================================================================//


//FIND METHOD


// const Array = ["hey", "hello", "hii"];

// function islength(string){
//     return string.length;
// }

// const result = Array.find(islength);
// console.log(result);


//============================================================================================//

//EVERY METHOD

const x = [2,4,3,6,8];

const r=x.every((i)=>i%2===0);  //if ek bhi odd h to false
console.log(r);

//===================================================================================================//


//SOME METHOD

const m = [2,4,3,6,8];

const res =m.some((i)=>i%2===0);  //if ev bhi even h to true
console.log(res);


//==============================================================================================//


//FILL METHOD

const myarr = new Array(10).fill(-1);
console.log(myarr);

//==========================================================================================================//


//SPLICE METHOD
//start, delete, insert

const myarray =['item1', 'item2', 'item3', 'item4'];

myarray.splice(1, 1, 'inserted item');


console.log(myarray);


//============================================================================================================================//


