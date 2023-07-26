import { add } from "./operations/add";
import { divide } from "./operations/divide";
import { multiply } from "./operations/multiply";
import { substract } from "./operations/substract";

export function operate(state) {
  switch (state.operator) {
    case "+":
      state.resultOfOperation = add(firstNumber, secondNumber);
      break;
    case "-":
      state.resultOfOperation = substract(firstNumber, secondNumber);
      break;
    case "*":
      state.resultOfOperation = multiply(firstNumber, secondNumber);
      break;
    case "/":
      state.resultOfOperation = divide(firstNumber, secondNumber);
      break;
  }
}
