const content = document.querySelector(".content");

export default function createHome() {
    //content.classList.add("home");
    content.appendChild(heading()); 

    let container = createTextContainer();

    // Create Container Heading
    container.appendChild(createContainerHeading("A divine tofu expirience"));
    // Create Container Paragraphs
    container.appendChild(createParagraph("At the age of fifteen Tim was enlightened. It was his first time to eat tofu and scince then he made it his God given mission to bring every body the real spirit of tofu."))
    container.appendChild(createParagraph("With creative new ways to serve tofu, tim made thousands of people fall in love with this divine food. He is most famous for his teriyaki tofu dish or his creative Tofu Ramen."))
    container.appendChild(createParagraph('To carry on his mission, Tim opened "Tim`s Tofu Temple" as a way to bring evrybody the joy of Tofu.'))
    container.appendChild(createParagraph("Tim`s Kitchen is opened daily from 12am till 10pm. Every Tofu lover and potential future tofu lover is welcome to visit us at this time."))

    content.appendChild(container);
}

function heading() {
    let heading = document.createElement("h1");
    heading.textContent = "Tim`s Tofu Temple";
    heading.classList.add("home-heading");
    return heading;
}

function createParagraph(text) {
    let p = document.createElement("p");
    p.textContent = text;
    return p;
}

function createTextContainer() {
    let container = document.createElement("div");
    container.classList.add("text-container");
    return container;
}

function createContainerHeading(text) {
    let cHeading = document.createElement("h2");
    cHeading.textContent = text;
    return cHeading;
}