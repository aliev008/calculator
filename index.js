export const operators = ["÷", "×", "-", "+"];
import { mainButtons } from "./components/mainButtons/main-buttons.js";

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    resultOfOperation: "",
    firstOperand: "",
    secondOperand: "",
    operator: "",
  };

  mainButtons();
});


export const buttonsArray = [
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