const content = document.querySelector(".content");

export default function createMenu() {
    content.classList.add("menu");

    let container = menuContainer();

    // Create Soup Category
    container.appendChild(createHeading("Soups"));
    // Append all soup dishes
    container.appendChild(createDish("Miso soup with salty flavoured Tofu", 3));
    container.appendChild(createDish("Tofu Ramen with mushrooms and soy sauce grilled tofu", 4));
    container.appendChild(createDish("Creamy smoked Tofu soup topped with grilled Tofu crumbles", 4));
    

    // Create Main course Category
    container.appendChild(createHeading("Main Courses"));
    // Append all main course dishes
    container.appendChild(createDish("Terryaki Tofu", 4)); 
    container.appendChild(createDish("Tofu bacon style", 5)); 
    container.appendChild(createDish("Grilled BBQ flavoured Tofu", 7)); 
    container.appendChild(createDish("Tacos with Tex-Mex styled Tofu", 6)); 
    container.appendChild(createDish("Spaghetti in a creme souce with smoked Tofu", 6)); 
    container.appendChild(createDish("Lentos with a ricotta like Tofu dipping", 5)); 
    container.appendChild(createDish("Smashed potatoes with borcoli and a Tofu steak", 8)); 

    // Create Desert Category
    container.appendChild(createHeading("Desert"));
    // Create Desert dishes
    container.appendChild(createDish("Silk Tofu creme with a stawberry topping", 3));
    container.appendChild(createDish("Caramalized Tofu slices with a side of coconut cream and fruits", 4));
    container.appendChild(createDish("Tofu dough Mochis with differnt fillings", 4));

    content.appendChild(container);
}

function menuContainer() {
    let container = document.createElement("div");
    container.classList.add("menu-container");
    return container;
}

function createDish(text, price) {
    let dishContainer = document.createElement("div");
    let dish = document.createElement("p");
    let cost = document.createElement("p");

    dish.textContent = text;
    cost.textContent = price + "$";

    dishContainer.classList.add("dish-container");

    dishContainer.appendChild(dish);
    dishContainer.appendChild(cost);

    return dishContainer;
}

function createHeading(text) {
    let heading = document.createElement("h4");

    heading.textContent = text;
    return heading;
}