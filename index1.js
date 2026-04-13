// const signUpForm = document.getElementById("signup-form");
// const messageArea = document.getElementById("message-area");
// console.log(signUpForm);

// signUpForm.addEventListener("submit", function(event){
//     event.preventDefault();

//     const nameInput =document.getElementById("name");
//     const emailInput =document.getElementById("email");

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();

//     if (name===""){
//         messageArea.textContent ="Please enter your name.";
//         messageArea.style.color ="red";

//     } else if (email ==="") {
//         messageArea.textContent ="Please enter your email.";
//         messageArea.style.color ="green";
    
    
// } else {
//     messageArea.textContent ="Thank you for signing up," + name + "!";
//     messageArea.style.color = "orange";
// }
// })
// // Arrow Functions
// // Arrow functions are consice way to write functions in javascript
// // they are usually used for short, simple functions.
//  // Traditional function expression
//  const traditionalfunction = function() {
//     console.log("This is a traditional function");
//  }
//  anothertraditionalfunction();

//  // Arrow function expression
//  const arrowFunc = () => {
//     console.log("This is an arrow function");
    
    
//  }
//  arrowFunc();
 
//   const add = (a, b) => {
//     console.log( a+b )

//   }
//  add(3,4)
//  // JSON (JavaScript Object Notation)
//  // Javascript Object
 const task = {
    id: 1, 
    title: "Complete JavaScript assignment",
    coompleted: false


 }
console.log(task);
//JSON string
const taskJSON =JSON.stringify(task);
console.log(taskJSON);
//Parsing JSON string back to JavaScript object
const parsedTask = JSON.parse(taskJSON);
console.log(parsedTask);
// Local storage
// Storing data in local storage
localStorage.setItem("Name","Martha kent");
 localStorage.setItem("task", taskJSON);

 // Retrieving data from local storage
 const nameFromStorage = localStorage.getItem("Name");
 console.log("Name from local storage: ",nameFromStorage);
  const taskFromStorage = localStorage.getItem("task")
  console.log(taskFromStorage); 
  
