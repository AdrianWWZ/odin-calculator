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
