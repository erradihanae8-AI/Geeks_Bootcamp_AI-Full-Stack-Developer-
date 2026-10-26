const article = document.querySelector("article");

// 1. Retrieve the h1 using a DOM property and display it
console.log(article.children[0]);

// 2. Remove the last paragraph
const paragraphs = article.querySelectorAll("p");
paragraphs[paragraphs.length - 1].remove();

// 3. Change the h2 background color to red when clicked
const h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

// 4. Hide the h3 when clicked
const h3 = document.querySelector("h3");

h3.addEventListener("click", function () {
    h3.style.display = "none";
});

// 5. Make all paragraphs bold when the button is clicked
const button = document.querySelector("#boldButton");

button.addEventListener("click", function () {
    const allParagraphs = document.querySelectorAll("article p");

    allParagraphs.forEach(function (paragraph) {
        paragraph.style.fontWeight = "bold";
    });
});

// 6.Random font size when hovering over h1
const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function () {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
});

// 7.  Fade out the second paragraph when hovering over it
const secondParagraph = document.querySelectorAll("article p")[1];

secondParagraph.addEventListener("mouseover", function () {
    secondParagraph.classList.add("fade-out");
});
