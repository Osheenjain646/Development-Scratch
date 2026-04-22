// when we run something it reside in ram
// Anything that is not running currently will reside in the SSD or hard disk

// Compiler convert high level developer friendly code into binary code to run the code efficiently and fast
// g++ is a compiler or many other compilers are there for different languages too

// js is a interpreted language which means it is not compiled but is executed line by line
// can run partially if even there is an error in the code but in case of compiler if there is an error then it will not run at all


// console.log("Hello World");
// console.log(a); // partially Not Work

// js is a weakly typed language which means we can perform operations on different types of data without any error
// Js is a dynamic type means inside one variable we can store any type of data
// it is loosely typed language
// js is single threaded language

// cluster module ??
// It is a type of tool which helps to run multiple copies of your application
// at the same time to handle the work efficiently without taking much loading time to do work.
// As javaScript is single threaded language so it may take much time to execute the task efficiently but with the
// help of cluster the cpu can use the multiple core instead of single core.
// It creates multiple sub process to do the same work at a time.
// All the workers work on the same server port and this way cpu uses its all cores and do the work more efficiently and faster than the usual way of doing it instead of one core.
// Benefits of cluster module
// Better performance → handles more users at once
// Load balancing → requests are distributed across workers
// Scalability → easier to grow your app
// Fault tolerance → if one worker crashes, others continue
// example:
/*
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // create worker
  }
} else {
  // worker runs your app
}
*/
// “Cluster module” can mean slightly different things depending on context:

// In Node.js → multi-process scaling (most common)
// In distributed systems → multiple machines working together
// In some languages (like CLU) → a concept similar to a class


// Subroutines ??

// // Q1
// function greet(firstName , lastName){
//     console.log("Hello" + " " + firstName + " " + lastName);
// }
// let firstName = "Osheen";
// let lastName = "Jain";
// greet(firstName , lastName);

// // Q2
// function greetOnGender(name , gender){
//     if(gender === "Male" || gender === "male"){
//         console.log("Hello Mr." + " " + name);
//     }else if(gender === "Female" || gender === "female"){
//         console.log("Hello Ms." + " " + name);
//     }else{
//         console.log("Hello " + name + " " + "(Other)");
//     }
// }

// greetOnGender("Osheen Jain" , "Male");
// greetOnGender("Osheen Jain" , "male");
// greetOnGender("Osheen Jain" , "Female");
// greetOnGender("Osheen Jain" , "female");
// greetOnGender("Osheen Jain" , "Other");

// Q3
// for loops
// let ans = 0;
// for(let i=0; i<=1000; i++){
//     ans = ans + i;
// }

// console.log(ans);



// Arrays
// Q1
// let arr = [1 , 2 , 3 , 4 , 5];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

//Q2
// let arr = [1 , 2 , 3 , 4 , 5 , 89 ,2654 ,23];
// let biggest = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>biggest){
//         biggest=arr[i];
//     }
// }

// console.log(biggest);


// objects

//Q3
// const personArray = ["Osheen Jain" , "Anurag Raj", "female Jain"];
// const genderArray = ["male" , "male" , "female"];
// const ageArray = [20 , 22 , 21];

// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i]==="male"){
//         console.log(personArray[i] + " is " + ageArray[i] + " old.");
//     }
// }

// using the object

// const users1 = {
//     firstName : "Osheen",
//     lastName : "Jain",
//     gender : "male",
//     age : 20
// }

// console.log(users1.gender)


// array of objects

// const allUsers = [
//     {
//         name : "Osheen Jain",
//         gender : "male",
//     },
//     {
//         name : "Manoj Verma",
//         gender : "male",
//     },
//     {
//         name : "female candidate",
//         gender : "female",
//     }
// ]

// for(let i=0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"]==="male"){
//         console.log(allUsers[i]["name"]);
//     }
// }

//Q4
// let arr =[1 , 2 , 3 , 4 , 5];
// arr.reverse();
// console.log(arr);



// functions in js

//Q1
// function sum(a,b){
//     // take things and return the output is known as function
//     return a+b;
// }

// console.log(sum(5,5));

//Q2
// function sum(a , b){
//     return ( a + b );
// }

// let a = 5;
// let b = 6;
// console.log("The sum of " + a + " and " + b + " is " + sum(a , b));

// CallBacks kind of
// function sum(a,b,fn){
//     let sum = a+b;
//     fn(sum);
// }

// function display(result){
//     console.log("The Sum is " + result);
// }

// sum(5 , 6 , display);


// function calculate(a , b , operation){
//     if(operation==="add"){
//         const result = sum(a,b);
//         return result;
//     }
//     if(operation==="subtract"){
//         const result = subtract(a , b);
//         return result;
//     }
// }
// function sum(a , b){
//     return a+b;
// }
// function subtract(a , b){
//     return a-b;
// }

// console.log(calculate(5 , 6 , "add"));
// console.log(calculate(5 , 6 , "subtract"));


// SetTimeOut
// Accepts two arguments - a callback function and a time to wait to execute that function

// function greet(){
//     console.log("Hello World");
// }

// setTimeout(greet , 6000);
// // wait for 6000 millisecond and then execute the callback function


// setTimeout(fn , duration){
//     sleep(duration);
//     fn();
// }

// sleep the current single thread for the duration and then start it again and execute that callback function
