// getElementById
const header = document.getElementById("main-header");
console.log("Header:", header);

// getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("Contents:", contents);

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs:", paragraphs);

// querySelector
const firstLink = document.querySelector(".nav-link");
console.log("First Link:", firstLink);

// querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("All Links:", allLinks);

// Practice
const heading = document.querySelector("h1");
console.log(heading);

const allContent = document.querySelectorAll(".content");
console.log(allContent);

const form = document.getElementById("contact-form");
console.log(form);

const emailInput = document.getElementById("email");
console.log(emailInput);

const navItems = document.querySelectorAll("nav li");
console.log(navItems);

const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

const lastParagraph = document.querySelector("p:last-of-type");
console.log(lastParagraph);


const nav = document.querySelector("nav");

console.log(nav.parentElement);
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

const article = document.querySelector("article");

console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

const navLinks = nav.querySelectorAll("a");
console.log(navLinks);

// Practice

const headerNav = header.querySelector("nav");
console.log(headerNav);

console.log(firstNavLink.parentElement);

console.log(article.nextElementSibling);

const navList = document.querySelector(".nav-list");
console.log(navList.children);

const footer = document.querySelector("footer");
console.log(footer.parentElement);


console.log(heading.textContent);
console.log(heading.innerText);

heading.textContent = "priestrivers organisation PR.O";

console.log(article.innerHTML);

heading.textContent = "Welcome to Priestrivers Org";

article.innerHTML = `
    <h2>Submission Notice</h2>
    <p>Submission dateline will be communicated soon.</p>
    <p>All who wish to have a promotion must make a submission and application.</p>
    <p>Applications will be reviewed, and results will be given after 14 days.</p>
    <p>Be patient as we look forward to selecting the best team to represent us.</p>
`;


console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("href", "https://example.com");

console.log(firstLink.hasAttribute("target"));

firstLink.removeAttribute("target");

// Styling

const container = document.querySelector(".container");

container.style.backgroundColor = "rgb(245, 10, 10)";
container.style.padding = "30px";
container.style.borderRadius = "8px";

Object.assign(container.style, {
    backgroundColor: "rgb(44, 13, 242)",
    color: "white",
    padding: "20px"
});


const newParagraph = document.createElement("p");
newParagraph.textContent = "from office of the secretariat for and onbehalf of the management"
article.appendChild(newParagraph);

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "The following is notice of priestrivers ORG";
anotherParagraph.className = "highlight";

const firstParagraph = article.querySelector("p");

article.insertBefore(
    anotherParagraph,
    firstParagraph
);

// Remove footer
footer.remove();

// Remove last nav item

const lastLink = nav.querySelector("li:last-child");

lastLink.parentElement.removeChild(lastLink);

// Clone item

const navItem =
    document.querySelector(".nav-link").parentElement;

const clone = navItem.cloneNode(true);

clone.querySelector("a").textContent = "Blog";

navList.appendChild(clone);

// Function

function addNavItem(text, href) {

    const li = document.createElement("li");

    const link = document.createElement("a");

    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    li.appendChild(link);

    navList.appendChild(li);

}

addNavItem("Portfolio", "/portfolio");
addNavItem("Services", "/services");

// Create button
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Click events
button.addEventListener("click", function () {
    console.log("Button clicked!");
});

button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

button.addEventListener("click", handleClick);

// Remove listener
button.removeEventListener("click", handleClick);

// Get form inputs
const nameInput = document.getElementById("name");

// Mouse events
button.addEventListener("mouseenter", () => {
    console.log("Mouse entered button");
});

button.addEventListener("mouseleave", () => {
    console.log("Mouse left button");
});

// Keyboard event
nameInput.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

// Input event
nameInput.addEventListener("input", (event) => {
    console.log("Current value:", event.target.value);
});

// Focus event
nameInput.addEventListener("focus", () => {
    console.log("Input focused");
});

// Blur event
nameInput.addEventListener("blur", () => {
    console.log("Input lost focus");
});

// Form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
});


let count = 0;

// Counter display
const counter = document.createElement("h2");
counter.textContent = count;
document.body.appendChild(counter);

// Buttons
const plusBtn = document.createElement("button");
plusBtn.textContent = "+";

const minusBtn = document.createElement("button");
minusBtn.textContent = "-";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

document.body.appendChild(plusBtn);
document.body.appendChild(minusBtn);
document.body.appendChild(resetBtn);

// Increase
plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

// Decrease
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});


// Click event object
document.addEventListener("click", function (event) {

    console.log("Target:", event.target);

    console.log("Current Target:", event.currentTarget);

    console.log("Type:", event.type);

    console.log("Mouse Position:", event.clientX, event.clientY);

});

// Prevent default form submit
form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submission prevented.");

});

// Keyboard events
document.addEventListener("keydown", function (event) {

    console.log("Key:", event.key);

    console.log("Code:", event.code);

    console.log("Shift:", event.shiftKey);

    console.log("Ctrl:", event.ctrlKey);

    console.log("Alt:", event.altKey);

});

// Keyboard shortcuts
document.addEventListener("keydown", function (event) {

    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape clears inputs
    if (event.key === "Escape") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }

    // Ctrl + Enter submits form
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        form.requestSubmit();
    }

});


// Event Bubbling
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Delegation Task List
const taskList = document.getElementById("task-list");

taskList.addEventListener("click", function (event) {

    if (event.target.classList.contains("item")) {
        console.log("You clicked:", event.target.textContent);
    }

});

// Dynamic Task List
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const list = document.getElementById("task-list");

// Add new task
addTaskButton.addEventListener("click", () => {

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.className = "item";

    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete">Delete</button>
    `;

    list.appendChild(li);

    taskInput.value = "";

});

// Event Delegation
list.addEventListener("click", function (event) {

    // Toggle completed
    if (event.target.tagName === "SPAN") {
        event.target.classList.toggle("completed");
    }

    // Delete task
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }

});

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

// Show Error
function showError(input, errorElement, message) {

    input.classList.add("error");
    errorElement.textContent = message;

}

// Clear Error
function clearError(input, errorElement) {

    input.classList.remove("error");
    errorElement.textContent = "";

}

// Real-time Name Validation
nameInput.addEventListener("input", function () {

    const value = nameInput.value.trim();

    if (value.length < 2) {

        showError(
            nameInput,
            nameError,
            "Name must be at least 2 characters."
        );

    } else {

        clearError(nameInput, nameError);

    }

});

// Real-time Email Validation
emailInput.addEventListener("input", function () {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email."
        );

    } else {

        clearError(emailInput, emailError);

    }

});

// Final Form Submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    let valid = true;

    if (name.length < 2) {

        showError(
            nameInput,
            nameError,
            "Name must be at least 2 characters."
        );

        valid = false;

    } else {

        clearError(nameInput, nameError);

    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email."
        );

        valid = false;

    } else {

        clearError(emailInput, emailError);

    }

    if (valid) {

        alert("Form submitted successfully!");

        form.reset();

        clearError(nameInput, nameError);
        clearError(emailInput, emailError);

    }

});

console.log("what was ment to be will be ");