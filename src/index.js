import './styles.css';
import tofu from './tofu.jpg';
import createHome from './home.js';
import createMenu from './menu.js';

const home = document.querySelector("button[name='home']");
const menu = document.querySelector("button[name='menu'");

addEventListener("DOMContentLoaded", createHome);

home.addEventListener("click", () => {
    clearContent();
    createHome();
});
menu.addEventListener("click", () => {
    clearContent();
    createMenu();
});

function clearContent() {
    const content = document.querySelector(".content");

    content.classList.remove("home");
    content.classList.remove("menu");

    content.innerHTML = "";
}
