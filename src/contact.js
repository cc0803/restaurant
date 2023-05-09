let content = document.querySelector(".content");

export default function createContact() {
    content.classList.add("contact");

    let box1 = createBox();
    let box2 = createBox();
    let box3 = createBox();
    let box4 = createBox();

    box1.appendChild(createText("Opening Hours", true));
    box1.appendChild(createText("Mo-So: 12am till 10pm"));

    content.appendChild(box1);

    box2.appendChild(createText("Delivery", true));
    box2.appendChild(createText("We are delivering fresh and hot food within 30 minutes of ordering. Delivery is only possible during our opening hours."));

    content.appendChild(box2);

    box3.appendChild(createText("Address", true));
    box3.appendChild(createText("Adress: ExampleStreet 123, 12345 Someplace, USA"));
    box3.appendChild(createText("Tel: +1 234-567-8910"));
    box3.appendChild(createText("E-mail: example@email.com"));

    content.appendChild(box3);

    box4.appendChild(createText("Catering", true));
    box4.appendChild(createText("We also do catering service. Depending on your wishes, you can choose a wide selection from our menu. On special request we also offer dishes of menu. If you are intereseted write us an E-mail with the specific details under example@email.com "));
    box4.appendChild(createText("Catering prices may vary from the prices on our menu."));

    content.appendChild(box4);
}

function createBox() {
    let box = document.createElement("div");
    box.classList.add("box");
    return box;
}

function createText(text, heading=false) {
    let par = document.createElement("p");
    par.classList.add("par");
    if (heading) {
        par.classList.add("par-heading");
    }
    par.textContent = text;
    return par;
}
