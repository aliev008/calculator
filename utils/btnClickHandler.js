import { buttons } from "../components/mainButtons/main-buttons.js";
import { operate } from "./operate.js";

export function btnClickHandler({ target }, state) {
  const value = target.innerText;
  const isOperator = buttons.some((button) => button === value);
  const isDecimal = value === "." ? true : false;
  const isEqualSign = "=" ? true : false;

  if (isOperator) {
    state.operator = value;
    return;
  }

  if (isDecimal && !state.operator) {
    state.firstOperand += value;
    return;
  }

  if (isDecimal && state.operator) {
    state.secondOperand += value;
    return;
  }

  if (isEqualSign) {
    operate(state);
  }
}
