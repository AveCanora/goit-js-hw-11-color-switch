import { refs } from './js/refs.js';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let idInterval;
refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', stopColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  idInterval = setInterval(() => {
    refs.bodyTeg.style.background = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  refs.btnStart.disabled = true;
}
function stopColor() {
  clearInterval(idInterval);
  refs.btnStart.disabled = false;
}
