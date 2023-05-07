import './styles.css';
import tofu from './tofu.jpg';
import createHome from './home.js';

createHome();

const home = document.querySelector("button[name='home']");
home.addEventListener("click", createHome)
