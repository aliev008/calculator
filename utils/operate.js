import { add } from "./operations/add.js";
import { divide } from "./operations/divide.js";
import { multiply } from "./operations/multiply.js";
import { substract } from "./operations/substract.js";

export function operate(state) {
  switch (state.operator) {
    case "+":
      state.resultOfOperation = add(state.firstOperand, state.secondOperand);
      break;
    case "-":
      state.resultOfOperation = substract(
        state.firstOperand,
        state.secondOperand
      );
      break;
    case "×":
      state.resultOfOperation = multiply(
        state.firstOperand,
        state.secondOperand
      );
      break;
    case "÷":
      state.resultOfOperation = divide(state.firstOperand, state.secondOperand);
      break;
  }
  state.currentOperandToShow = state.resultOfOperation;
}
