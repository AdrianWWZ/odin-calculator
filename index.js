const operate = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return Math.round((num1 + num2) * 10) / 10;

    case "-":
      return Math.round((num1 - num2) * 10) / 10;

    case "*":
      return Math.round(num1 * num2 * 10) / 10;

    case "/":
      return Math.round((num1 / num2) * 10) / 10;

    default:
      return null;
  }
};

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    display.innerText += e.target.innerText;
  });
});

const operations = document.querySelectorAll(".operation");
operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    display.innerText += e.target.innerText;
  });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.innerText = "";
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  display.innerText = display.innerText.substring(
    0,
    display.innerText.length - 1
  );
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  let calculation = display.innerText.match(/\d+\.\d+|\d+|[^0-9]/g);

  while (calculation[1]) {
    for (let i = 0; i < calculation.length; i++) {
      if (isNaN(calculation[i])) {
        if (isNaN(calculation[i - 1]) || isNaN(calculation[i + 1])) {
          display.innerText = "ERROR";
          calculation = [];
        }

        if (calculation[i] === "*") {
          calculation = calculate(calculation, i);
          break;
        } else if (calculation[i] === "/") {
          calculation = calculate(calculation, i);
          break;
        } else if (calculation[i] === "+") {
          calculation = calculate(calculation, i);
          break;
        } else if (calculation[i] === "-") {
          calculation = calculate(calculation, i);
          break;
        }
      }
    }
  }
  display.innerText = calculation[0];
});

const calculate = (arr, i) => {
  const result = operate(arr[i], parseInt(arr[i - 1]), parseInt(arr[i + 1]));
  arr[i - 1] = result.toString();
  arr.splice(i, 2);
  return arr;
};
