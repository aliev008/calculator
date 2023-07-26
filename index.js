export const operators = ["÷", "×", "-", "+"];
import { buttons } from "./components/buttons.js";

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    resultOfOperation: "",
    firstOperand: "",
    secondOperand: "",
    operator: "",
  };

  buttons();
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