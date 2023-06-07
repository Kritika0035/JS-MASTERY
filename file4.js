// if else condition

let number = 18

if(number > 18){
    console.log("can play") //false
}
else
{
    console.log("can play mario"); //true
}

let winnum = 19;
let guess = +prompt("guess the number"); // to take input

console.log(typeof guess, guess);

//switch statements

let day=2;

switch(day){
    case 0:
        console.log("sunday");
        break; // so that it terminates then n there
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    default:
        console.log("invalid day");
        break;
}
