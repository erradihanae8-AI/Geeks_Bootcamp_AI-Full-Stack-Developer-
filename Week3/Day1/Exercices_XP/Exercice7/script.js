
const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://tse1.mm.bing.net/th/id/OIP.cj9_J1G8C6nodR-KckXKbgHaLH?r=0&pid=Api&h=220&P=0",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://tse3.mm.bing.net/th/id/OIP.LCN_U03M3KcHfs8SalSI-gHaLX?r=0&pid=Api&h=220&P=0",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(function(book) {

   
    const div = document.createElement("div");

    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;

    
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "100px";

    if (book.alreadyRead === true) {
        details.style.color = "red";
    }
    div.appendChild(details);
    div.appendChild(img);

    section.appendChild(div);
});
