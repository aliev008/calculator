import { btnClickHandler } from "../../utils/btnClickHandler.js";

const buttonsArray = [
  "7",
  "8",
  "9",
  "÷",
  "4",
  "5",
  "6",
  "×",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "=",
  "+",
];

export function mainButtons() {
  const container = document.getElementById("main-buttons");
  buttonsArray.forEach((button) => {
    const btnElem = document.createElement("button");
    btnElem.classList.add("btn", "small-btn");
    btnElem.innerText = button;
    btnElem.addEventListener("click", (e) => btnClickHandler(e, state));
    container.appendChild(btnElem);
  });
}
