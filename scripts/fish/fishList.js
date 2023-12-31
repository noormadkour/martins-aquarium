import { comboFunction } from "./database.js";

export const fishList = () => {
  const comboArray = comboFunction();
  let htmlString = `<article class="fish__cards">`;
  for (const fish of comboArray) {
    htmlString += `
    <section class="fish__card">
        <div><img  class="fish__image" src="${fish.image}" /></div>
        <div class="fish__name">${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.size}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
    </section>`;
  }
  htmlString += "</article>";
  return htmlString;
};