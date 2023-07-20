import { getFish, mostHolyFish, soldierFish, nonHolyFish } from "./database.js";

export const fishList = () => {
  const holyFish = mostHolyFish();
  const soldiers = soldierFish();
  const plebs = nonHolyFish();
  let htmlString = `<article class="fish-container">`;
  for (const fish of holyFish) {
    htmlString += `
        <section class="fish__cards">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  for (const fish of soldiers) {
    htmlString += `
        <section class="fish__cards">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  for (const fish of plebs) {
    htmlString += `
        <section class="fish__cards">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  htmlString += `</article>`;
  return htmlString;
};
