const mainDisplay = document.querySelector(".main-display");
const secondaryDisplay = document.querySelector(".secondary-display");

export function display(state) {
  mainDisplay.innerText = state.currentValue;

  secondaryDisplay.innerText =
    state.firstOperand +
    state.operator +
    state.secondOperand +
    state.isEqualSign;
}
