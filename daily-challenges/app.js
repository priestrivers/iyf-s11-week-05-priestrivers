const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {

    const headings = document.querySelectorAll("h1, h2, h3");

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    headings.forEach((heading) => {
        heading.style.color = randomColor;
    });

});


let paragraphCount = 1;

const addParagraph = document.getElementById("addParagraph");
const paragraphContainer = document.getElementById("paragraphs");

addParagraph.addEventListener("click", () => {

    const paragraph = document.createElement("p");

    paragraph.textContent = `Paragraph ${paragraphCount} `;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {

        paragraph.remove();

    });

    paragraph.appendChild(deleteButton);

    paragraphContainer.appendChild(paragraph);

    paragraphCount++;

});

const toggleImages = document.getElementById("toggleImages");

let imagesHidden = false;

toggleImages.addEventListener("click", () => {

    const images = document.querySelectorAll("img");

    images.forEach((image) => {

        image.style.display = imagesHidden ? "inline-block" : "none";

    });

    imagesHidden = !imagesHidden;

    toggleImages.textContent = imagesHidden
        ? "Show Images"
        : "Hide Images";

});


const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

    const source = document.getElementById("source");

    const target = document.getElementById("target");

    target.innerHTML = source.innerHTML;

});


const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkMode.textContent = "Light Mode";

    } else {

        darkMode.textContent = "Dark Mode";

    }

});


console.log("pure greatness!");