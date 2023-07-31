import { display } from "../display/display.js";

const secondaryDisplay = document.querySelector(".secondary-display");

export function clearButtons(state) {
  const clearButton = document.querySelector(".clear-btn");
  const deleteButton = document.querySelector(".delete-btn");

  clearButton.addEventListener("click", () => {
    state.reset();
    display(state);
    secondaryDisplay.innerText = "";
  });

  deleteButton.addEventListener("click", () => {
    state.currentValue = state.currentValue.slice(0, -1);
    display(state);
  });
}
