import { operate } from "./operate.js";
import { display } from "../components/display/display.js";
import { convertOperator } from "./convertOperators.js";
import { buttonsArray } from "../components/mainButtons/main-buttons.js";

const operators = ["+", "-", "÷", "×"];

export function btnClickHandler(event, state) {
  const value = event.key ? convertOperator(event.key) : event.target.innerText;

  state.isOperatorClicked = operators.some((button) => button === value);
  state.isEqualSign = value === "=" ? "=" : "";
  const isDecimal = value === ".";

  // When there was a click on the operator

  if (state.isOperatorClicked) {
    if (!state.firstOperandEntered && !state.secondOperandEntered) {
      state.isEqualSign = "";
      state.operator = value;
      state.firstOperand = state.currentValue;
      state.firstOperandEntered = true;
      display(state);
      state.operationMade = true;
      return;
    }

    if (!state.secondOperandEntered) {
      if (state.operator === "÷" && state.currentValue === "0") {
        alert("You can't divide by zero!");
        return;
      }
      state.secondOperand = state.currentValue;
      operate(state);
      state.operator = value;
      state.firstOperand = state.resultOfOperation;
      state.secondOperand = "";
      state.secondOperandEntered = false;
      state.currentValue = state.resultOfOperation;
      display(state);
      state.operationMade = true;
      return;
    }
  }

  // When there was a click on the equal sign

  if (state.isEqualSign) {
    if (state.operator === "÷" && state.currentValue === "0") {
      alert("You can't divide by zero!");
      return;
    }
    if (state.firstOperandEntered) {
      state.secondOperand = state.currentValue;
      operate(state);
      state.currentValue = state.resultOfOperation;
      display(state);
      state.firstOperand = state.resultOfOperation;
      state.secondOperand = "";
      state.firstOperandEntered = false;
      state.secondOperandEntered = false;
      state.operationMade = true;
      return;
    }
  }

  // When there was a click on the decimal sign

  if (isDecimal) {
    if (state.currentValue.includes(".")) {
      return;
    }
  }

  // When there was a click on number button

  if (!state.isOperatorClicked && !state.isEqualSign) {
    if (state.operationMade) {
      state.currentValue = "";
      state.currentValue += value;
      display(state);
      state.resultOfOperation = "";
      state.operationMade = false;
      return;
    } else {
      if (value === ".") {
        state.currentValue += value;
        display(state);
        return;
      }
      if (state.currentValue === "0") state.currentValue = "";
      state.currentValue += value;
      display(state);
      return;
    }
  }
}
