import { fishList } from "./scripts/fishList.js";

let parentHTMLElement = document.querySelector(".fish-container");

parentHTMLElement.innerHTML = fishList();
