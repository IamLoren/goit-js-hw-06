const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const box = document.getElementById('boxes');
let numberOfElements = Number(input.value);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getNumberOfElements() {
  return Number(input.value);
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i +=1) {
    setTimeout(() => {
    const div = document.createElement('div');
    div.classList.add('collection-item');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    div.style.transform = `scale(1)`;
    width += 10;
    height += 10;
    box.insertAdjacentElement('beforeend', div);
  }, 200 * i);
  }
}

function destroyBoxes() {
  box.innerHTML = ``;
}

createButton.addEventListener('click', () => {
  createBoxes(getNumberOfElements());
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});