// let signupbtn = document.querySelector('.signupbtn');
// let signinbtn = document.querySelector('.signinbtn');
// let namefield = document.querySelector('.namefield');
// let title = document.querySelector('.title');
// let underline = document.querySelector('.underline');

// signinbtn.addEventListener('click',()=>{
//     namefield.computedStyleMap.maxHeight ='0';
//     title.innerHTML='Sign In';
//     signupbtn.classList.add('disable');
//     signinbtn.classList.remove('disable');
// });
// // signinbtn.addEventListener('click',()=>{

// // )};
// signupbtn.addEventListener('click',()=>{
//     namefield.computedStyleMap.maxHeight='0';
//     title.innerHTML='SignUp';
//     signinbtn.classList.add('disable');
//     signupbtn.classList.remove('disable');
// });

// const Hello = "Hello";
// function printHello($statement){
//     console.log($statement);
// }
//sum function
// function sum(a, b){
// return a + b;
// }
// const arrowSum = (a, b) =>{
//     console.log(a + b);
// };

let newHeading = document.createElement("p")
newHeading.innerHTML="<i> hi i am new!";

document.querySelector("body").prepand(newHeading);