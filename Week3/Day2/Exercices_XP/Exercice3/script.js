
 // 1. Declare a global variable
let allBoldItems;

// 2. Collect all bold items
function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

// 3. Change all bold text to blue
function highlight() {
    allBoldItems.forEach(function (item) {
        item.style.color = "blue";
    });
}

// 4. Change all bold text back to black
function returnItemsToDefault() {
    allBoldItems.forEach(function (item) {
        item.style.color = "black";
    });
}

// Collect the bold items
getBoldItems();

// 5. Add mouseover and mouseout events
const paragraph = document.querySelector("p");

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
