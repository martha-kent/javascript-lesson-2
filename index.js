// // else- if statement
// //definition of else if statement
// if (condition) {
//     // code to be executed if condition is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else { 
//     // code to be executed if both condition1 and conditional2 are false
// } else {
//     // code to be executed if all conditions are false
// }


// practice examples
// let mark = 50

// if (mark > 69 ) {
//     console.log("very good, you have passed")
// }

// if (mark >= 70 ){
//     console.log("You have failed the exam")
// }
//Comparison Operators
// 1. Equal to (==)
// 2. Not equal to (!=)
// 3. Stricr equal to (===)
// 4. Strict not equal to (!==)
// 5. Greater than (>)
// 6. Less than(<)
// 7. Greater than or equal to( >=)
// 8. less than or equal to (<=)

// Arrays
let cars = ["BMW", "Benz", "jeep"];
console.log(cars);
console.log(cars[2]);

let mixedArray = ["kent", 20, "uganda", true, null, undefined, { name: "martha" }];
console.log(mixedArray);
console.log(mixedArray[6])

let person = {
    name: "martha",
    age: 20,
    district: "kampala",
    isStudent: false,
    hobbies: ["coding", "travelling"],
    address: {
        street: "234 Main street",
        city: "Kampala"

    }
}
console.log(person);
console.log(person["name"]);// accessing the name
console.log(person.hobbies)
console.log(person["hobbies"]);// accessing 

// Loops
//1. For loop
for (let i = 0; i < 7; i++) {
    console.log(i)

}
//Decrementing for loop
for (let i = 7; i > 0; i--) {
    console.log(i)
}
const myCars = ["BMW", "TOYOTA", "KIA"];
console.log(myCars);
const numberOfCars = myCars.length; //This gives the numberof items
console.log(numberOfCars);
const kiaPosition = myCars.indexOf("kia");
console.log("The position of kia in the array is ", kiaPosition);



for (let i = 0; i < myCars.length; i++) {
    console.log(myCars[i]);
}
for (let car of myCars) {
    function printCarPosition(car) {
        const index = myCars.indexOf(car);
        console.log("The position of " + car + " in the array is " + index);
    }
    printCarPosition(car);
    console.log(car);
}


// 2. While loop

// while (condition) {
//     // code to be executed as long as the condition is true
// }
 let id = 0;
 while ( id < 7) {
    console.log("From the while loop",id);
    id++;
 }

let t = 7;
while (t > 0) {
    console.log("from the while loop",t);
    t--;
}


let password = "";
 while (password !=="4567") {
    password = prompt("Please enter the correct password:");
 } 


// 3. Do-while loop
 // do {
    // code to be executed

//} while  (conditon);
 let i = 0
 do {
    console.log("From the do-while loop", i);
    i++
 } while (i < 7);

