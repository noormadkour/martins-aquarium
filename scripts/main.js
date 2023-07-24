import { fishList } from "./fish/fishList.js";
import { tipList } from "./tips/tipsList.js";
import { locationList, locationTips } from "./locations/locationList.js";

let parentHTMLElement = document.querySelector(".fish-container");
let parentHTMLElement2 = document.querySelector("#tank-tips");
let parentHTMLElement3 = document.querySelector(".location-list");
let parentHTMLElement4 = document.querySelector(".lc-tips");


parentHTMLElement.innerHTML = fishList();
parentHTMLElement2.innerHTML = tipList();
parentHTMLElement3.innerHTML = locationList();
parentHTMLElement4.innerHTML = locationTips();

