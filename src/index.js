import './styles.css';
import tofu from './tofu.jpg';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact';

const home = document.querySelector("button[name='home']");
const menu = document.querySelector("button[name='menu'");
const contact = document.querySelector("button[name='contact']");

addEventListener("DOMContentLoaded", createHome);

home.addEventListener("click", () => {
    clearContent();
    createHome();
});

menu.addEventListener("click", () => {
    clearContent();
    createMenu();
});

contact.addEventListener("click", () => {
    clearContent();
    createContact();
})

function clearContent() {
    const content = document.querySelector(".content");

    content.classList.remove("home");
    content.classList.remove("menu");
    content.classList.remove("contact");
    
    content.innerHTML = "";
}
