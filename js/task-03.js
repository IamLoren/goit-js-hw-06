const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const classNames = ['first', 'second', 'third']

const arrOfImages = images.map((img, index) => {
  const currentClass = classNames[index];
 return `<li class='${currentClass} gallery-item' id='${index}'>
          <img class='gallery-img' alt='${img.alt}' src='${img.url}' width='800'/>
          </li>
          `
});

document.querySelector('.gallery-list').insertAdjacentHTML('beforeend', `${arrOfImages.join('')}`);
document.querySelector('.gallery-list').insertAdjacentHTML('beforeend', `<div class="btn-container"><div class="slide-btn first-btn"></div><div class="slide-btn second-btn"></div><div class="slide-btn third-btn"></div></div>`);

const firstButton = document.querySelector('.first-btn');
const secondButton = document.querySelector('.second-btn');
const thirdButton = document.querySelector('.third-btn');

const rotateRight = () => {
  thirdButton.classList.add('btn-animation');
  let secondElement = document.querySelector(".second");
  let thirdElement = document.querySelector(".third");

  secondElement.classList.add('rotateRight');
  
  secondElement.classList.remove('second');
  secondElement.classList.add('third');
  thirdElement.classList.remove('third');
  thirdElement.classList.add('second');

  setTimeout(() => {
     secondElement.classList.remove('rotateRight');
      thirdButton.classList.remove('btn-animation');
  }, 1500)
}


const rotateLeft = () => {
  firstButton.classList.add('btn-animation');
  let firstElement = document.querySelector(".first");
  let secondElement = document.querySelector(".second");
  
  secondElement.classList.add('rotateLeft');
  
  secondElement.classList.remove('second');
  secondElement.classList.add('first');
  firstElement.classList.remove('first');
  firstElement.classList.add('second');


  setTimeout(() => {
    secondElement.classList.remove('rotateLeft');
    firstButton.classList.remove('btn-animation');
 }, 1500)
}

const activePointer = () => {
  secondButton.classList.add('btn-animation');
  let secondElement = document.querySelector(".second");

  secondElement.classList.add('active');
  
  setTimeout(() => {
    secondElement.classList.remove('active');
    secondButton.classList.remove('btn-animation');
 }, 1000)
}

thirdButton.addEventListener('click', rotateRight);

firstButton.addEventListener('click', rotateLeft);

secondButton.addEventListener('click', activePointer);

