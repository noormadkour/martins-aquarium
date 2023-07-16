import { fishList } from "./scripts/fishlist.js";

let parentHTMLElement = document.getElementsByClassName("fish-container");

parentHTMLElement.innerHTML = fishList();