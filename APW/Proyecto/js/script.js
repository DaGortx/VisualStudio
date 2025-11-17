const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let lastResult = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (btn.classList.contains('clear')) {
      currentInput = '';
      resultDisplay.textContent = '0';
      historyDisplay.textContent = '';
      return;
    }

    if (btn.classList.contains('equal')) {
      try {
        const result = eval(currentInput);
        lastResult = result;
        historyDisplay.textContent = currentInput + ' =';
        resultDisplay.textContent = result;
        currentInput = result.toString();
      } catch {
        resultDisplay.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    currentInput += value;
    resultDisplay.textContent = currentInput;
  });
});