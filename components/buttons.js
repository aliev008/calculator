import { btnClickHandler } from "../utils/btnClickHandler.js";
import { buttonsArray } from "../index.js";

export function buttons() {
  const container = document.getElementById("main-buttons");
  buttonsArray.forEach((button) => {
    const btnElem = document.createElement("button");
    btnElem.classList.add("btn", "small-btn");
    btnElem.innerText = button;
    btnElem.addEventListener("click", (e) => btnClickHandler(e, state));
    container.appendChild(btnElem);
  });
}
