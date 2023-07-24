import { getLocations, getTipLocations } from "../fish/database.js";

export const locationList = () => {
    const locations = getLocations();
  let htmlString = `<div class="locations">`;
  for (const location of locations) {
    htmlString += `
        <div id="location">${location.location}</div>
        `;
  }
  htmlString += `</div>`;
  return htmlString;
}


export const locationTips = () => {
    const locations = getTipLocations();
  let htmlString = ``;
  for (const location of locations) {
    htmlString += `
        <div id="lc-tip">${location.harvestingTip}</div>
        `;
  }
  return htmlString;
}