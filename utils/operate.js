import { add } from "./operations/add.js";
import { divide } from "./operations/divide.js";
import { multiply } from "./operations/multiply.js";
import { substract } from "./operations/substract.js";

export function operate(state) {
  switch (state.operator) {
    case "+":
      state.resultOfOperation = add(firstNumber, secondNumber);
      break;
    case "-":
      state.resultOfOperation = substract(firstNumber, secondNumber);
      break;
    case "×":
      state.resultOfOperation = multiply(firstNumber, secondNumber);
      break;
    case "÷":
      state.resultOfOperation = divide(firstNumber, secondNumber);
      break;
  }
}
