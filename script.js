const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operatorPressed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      currentInput = "";
      display.innerText = "0";
      operatorPressed = false;
    } else if (value === "CE" || value === "←") {
      currentInput = currentInput.slice(0, -1) || "";
      display.innerText = currentInput || "0";
    } else if (value === "=") {
      try {
        if (currentInput) {
          currentInput = eval(
            currentInput.replace("×", "*").replace("÷", "/")
          ).toString();
          display.innerText = currentInput;
          operatorPressed = false;
        }
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    } else if (value === "1/x") {
      try {
        if (currentInput) {
          currentInput = (1 / eval(currentInput)).toString();
          display.innerText = currentInput;
        }
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    } else if (value === "x²") {
      try {
        if (currentInput) {
          currentInput = Math.pow(eval(currentInput), 2).toString();
          display.innerText = currentInput;
        }
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    } else if (value === "²√x") {
      try {
        if (currentInput) {
          currentInput = Math.sqrt(eval(currentInput)).toString();
          display.innerText = currentInput;
        }
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    } else if (value === "+/-") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.innerText = currentInput;
      }
    } else if (value === "%") {
      try {
        if (currentInput) {
          currentInput = (eval(currentInput) / 100).toString();
          display.innerText = currentInput;
        }
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    } else {
      if (operatorPressed && "+-×÷".includes(value)) {
        return;
      }

      operatorPressed = "+-×÷".includes(value);

      currentInput += value.replace("×", "*").replace("÷", "/");
      display.innerText = currentInput;
    }
  });
});
