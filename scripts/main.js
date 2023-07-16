import { fishList } from "./scripts/fishlist.js";

const parentHTMLElement = document.querySelector(".fish-container");

parentHTMLElement.innerHTML = fishList();
