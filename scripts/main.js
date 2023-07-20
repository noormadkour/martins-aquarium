import { fishList } from "./fish/fishList.js";

let parentHTMLElement = document.querySelector(".fish-container");

parentHTMLElement.innerHTML = fishList();
