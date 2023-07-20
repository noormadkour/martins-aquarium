import { fishList } from "./fishList.js";

let parentHTMLElement = document.querySelector(".fish-container");

parentHTMLElement.innerHTML = fishList();
