import { isFloat } from "../isFloat.js";

export function divide(firstNumber, secondNumber) {
  const calculation = firstNumber / secondNumber;
  return isFloat(calculation) ? calculation.toFixed(10) : calculation;
}
