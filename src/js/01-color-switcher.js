const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

function startColorChange() {
  startButton.disabled = true; // Вимикаємо кнопку "Start"
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  startButton.disabled = false; // Увімкнюємо кнопку "Start"
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
