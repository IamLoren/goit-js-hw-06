const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const output = document.querySelector('.color');
const img = document.querySelector('.ball');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max));
}

function createPredict() {
  const predictBox = document.createElement('p');
  predictBox.classList.add('prediction');
  predictBox.textContent = `${prediction[getRandomNumber(prediction.length)]}`;
  img.insertAdjacentElement('afterend', predictBox);
}

button.addEventListener('click', () => {
  const prediction = document.querySelector('.prediction');
  prediction ? prediction.remove() : null;
  body.style.backgroundColor = `${getRandomHexColor()}`;
  output.textContent = `${body.style.backgroundColor}`;
  createPredict();
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 500)
  
})

let prediction = ['Прагнучи до успіху виглядайте так, немов ви його вже досягли.', 'Різниця між переможцем і переможеним тільки в тому, що перший піднявся більше разів, ніж впав.', 'Потрібно робити те, що ти повинен робити. І нехай все буде так, як буде.', 'Щоб бути воістину щасливим-володарюй над своїми думками.', 'Нехай тебе не лякає невміння. Роблячи з бажанням, азартом - навчишся.', 'Краще зробити і пошкодувати про зроблене,  ніж все життя шкодувати про не зроблене.', 'Стоячи на місці, ти рухаєшся  тільки назад.', 'Просто роби. Тут і зараз. Не втрачай час на коливання.', 'Будь-яка справа починається з віри в себе.', 'Ми завжди заздримо тому, на що в нас є власні ресурси, можливості та здатності. ', 'Розділіть проблему на невеликі завдання, з якими потрібно впоратися, щоб домогтися успіху', 'Поки ви засуджуєте людину, ви не маєте часу її любити', 'Ваш шлях вірний, продовжуйте його настільки ж наполегливо.', 'Перед початком будь-якої суперечки задай собі питання: ти хочеш бути правим чи щасливим.', 'Молись Богу, але греби до берега.', 'Настав час зайнятися практикою.', 'Частіше залишайтеся наодинці з собою. Ви багато в чому виграєте.', 'Щоб приступити до початку чогось нового і прекрасного, треба вийти зі своєї шкаралупи.', 'Щодня знаходь час для маленьких життєвих радощів.', 'Гарна презентація – це 80% успіху!', 'Ви накопичили вже багато досвіду. Для досягнення мети використовуйте усі свої таланти.'];