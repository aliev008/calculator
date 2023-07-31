import { buttonsArray } from "../components/mainButtons/main-buttons.js";
import { display } from "../components/display/display.js";
import { btnClickHandler } from "./btnClickHandler.js";

const secondaryDisplay = document.querySelector(".secondary-display");

export function keyboardPressHandler(state) {
  window.addEventListener("keydown", (e) => {
    switch (true) {
      case e.key === "Backspace":
        state.currentValue = state.currentValue.slice(0, -1);
        display(state);
        break;
      case e.key === "Delete":
        state.reset();
        display(state);
        secondaryDisplay.innerText = "";
        break;
      case buttonsArray.some((button) => e.key === button):
      case e.key === "*":
      case e.key === "/":
        btnClickHandler(e, state);
        break;
    }
  });
}
