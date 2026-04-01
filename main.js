const mainheading = document.querySelector("#main-heading")
console.log(mainheading);

const introParagraph = document.querySelector(".intro-paragraph");
console.log(introParagraph);

const allParagraphs = document.querySelectorAll(".intro-paragraph");
console.log(allParagraphs);


//Selecting the second paragraph options
const secondParagraph = allParagraphs[1];
console.log(secondParagraph);

const secondParagraphByNChild = document.querySelector("p:nth-child(2)");
console.log(secondParagraphByNChild);

// Using getElementById
const mainheadingById = document.getElementById("main-heading")
console.log(mainheadingById)

const introParagraphByClassName = document.getElementsByClassName("intro-paragraph");
console.log(introParagraphByClassName);

// Manipulating the Dom
mainheading.textContent = "Hello, Javascript in the Dom!";
mainheading.style.color = "green";
mainheading.style.fontsize = "54px";

// Event Handling
// Examples of events
// 1. click evemt, 2. Mouseover event, 3. Keydown event,
// 4. input event

const changeButton = document.querySelector("#change-paragraph");
console.log(secondParagraph);

changeButton.addEventListener("click", function () {
    secondParagraph.textContent = "Paragraph has been changed!";
    secondParagraph.style.color = "red";
    secondParagraph.style.fontsize = "24px";


})




