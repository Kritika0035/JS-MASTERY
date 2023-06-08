//FUNCTIONS

function sum(num1, num2, num3){
    console.log(num1+num2+num3);
}

sum(4,5,2);


//ARROW FUNCTION

const hbd = () => {
    console.log("happy birthday to youuu");
}

hbd();

const add = (a,b) => {
    console.log(a+b);
}
add(1,9);

const print = num => `this is a ${num}`; //functioin in a single line
p = print(8);
console.log(p);

//Hoisting

hello();

function hello(){                   // let, var, or const use krenge to error aaega
    console.log("hello world");  
}


//function inside function


function myapp(){
    const myvar = "value1";
    function myfunc(){
        const myvar="value59";
        console.log(myvar);
    };
    const myfunc2 = function(){};
    const myfunc3 = () => {};
    console.log(myvar);
    myfunc();
}

myapp();


//DEFAULT PARAMETERS

function addall(...numbers){
    let total = 0;
    for(let num of numbers){
        total = total + num;
    }
    return total;
}

const ans = addall(1,2,3,4,5);
console.log(ans);


//CALLBACK FUNCTION


function myfun2(name){
    console.log("inside fun 2");
    console.log(`your name is ${name}`);
}

function myfun(callback){
    console.log("hello");
    callback("harshit");
}

myfun(myfun2);  //func k andr func call krna


//FUNCTION RETURNING FUNCTION

function myfunc(){
    function hello(){
        return "hello";
    }
    return hello;
}

const answer = myfunc();
console.log(answer());