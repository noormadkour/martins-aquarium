import { fishList } from "./fish/fishList";

let parentHTMLElement = document.querySelector(".fish-container");

parentHTMLElement.innerHTML = fishList();
