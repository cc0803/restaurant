const content = document.querySelector(".content");

export default function createMenu() {
    content.classList.add("menu");

    let container = menuContainer();
    container.appendChild(createDish()); 

    content.appendChild(container);
}

function menuContainer() {
    let container = document.createElement("div");
    container.classList.add("menu-container");
    return container;
}

function createDish() {
    let dishContainer = document.createElement("div");

    dishContainer.classList.add("dish-container");
    return dishContainer;
}