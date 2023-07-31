export const operators = ["÷", "×", "-", "+"];
import { display } from "./components/display/display.js";
import { mainButtons } from "./components/mainButtons/main-buttons.js";
import { clearButtons } from "./components/clearButtons/clearButtons.js";
import { keyboardPressHandler } from "./utils/keyboardPressHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    resultOfOperation: "",
    firstOperand: "",
    secondOperand: "",
    firstOperandEntered: false,
    secondOperandEntered: false,
    operator: "",
    isEqualSign: "",
    isOperatorClicked: false,
    currentValue: "0",
    operationMade: false,
    reset() {
      this.resultOfOperation = "";
      this.firstOperand = "";
      this.secondOperand = "";
      this.firstOperandEntered = false;
      this.secondOperandEntered = false;
      this.operator = "";
      this.isEqualSign = "";
      this.currentOperand = "0";
      this.currentValue = "0";
      this.isOperatorClicked = false;
      this.operationMade = false;
    },
  };

  mainButtons(state);
  clearButtons(state);
  keyboardPressHandler(state);
  display(state);
});
