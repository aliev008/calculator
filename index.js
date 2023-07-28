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
  console.log({state});
});
