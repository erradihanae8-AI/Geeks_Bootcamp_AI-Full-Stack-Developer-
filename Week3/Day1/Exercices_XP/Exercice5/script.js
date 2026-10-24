
const container = document.getElementById("container");
console.log(container);

const firstList = document.querySelectorAll(".list")[0];
firstList.children[1].textContent = "Richard";

const lists = document.querySelectorAll(".list");
lists[1].children[1].remove();

for (const list of lists) {
    list.children[0].textContent = "Hanae";
}

for (const list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

for (const list of lists) {
    for (const li of list.children) {
        if (li.textContent.trim() === "Dan") {
            li.style.display = "none";
        }
    }
}

for (const list of lists) {
    for (const li of list.children) {
        if (li.textContent.trim() === "Richard") {
            li.style.border = "1px solid black";
        }
    }
}

document.body.style.fontSize = "20px";

if (container.style.backgroundColor === "lightblue") {
    const users = [];

    for (const list of lists) {
        for (const li of list.children) {
            if (li.style.display !== "none") {
                users.push(li.textContent);
            }
        }
    }

    alert("Hello " + users.join(" and "));
}
