
const products = require("./products");

// Function to search for a product
function findProduct(productName) {

    const product = products.find(
        item => item.name.toLowerCase() === productName.toLowerCase()
    );

    if (product) {
        console.log("Product found:");
        console.log("Name:", product.name);
        console.log("Price:", product.price, "DH");
        console.log("Category:", product.category);
    } else {
        console.log("Product not found!");
    }
}

// Test the function with different product names
findProduct("Laptop");
findProduct("Phone");
findProduct("Book");
findProduct("Shoes");
findProduct("Headphones");