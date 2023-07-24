import { getTips } from "../fish/database.js";

export const tipList = () => {
  const tips = getTips();
  let htmlString = `<div class="tips">
  <h3>Tank Tips</h3>`;
  for (const tip of tips) {
    htmlString += `
        <div id="tip">${tip.tip}</div>
        `;
  }
  htmlString += `</div>`;
  return htmlString;
};
