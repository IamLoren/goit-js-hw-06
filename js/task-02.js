const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const images = {
  Potatoes: 'https://i.pinimg.com/564x/a7/cf/d2/a7cfd265f418af00f0601921b0923f52.jpg',
  Mushrooms: 'https://i.pinimg.com/564x/47/d4/97/47d497e3d37abc1c4ff83df86d8c86c4.jpg',
  Garlic: 'https://i.pinimg.com/564x/4d/49/b8/4d49b893d961eb0bca5e1a61dea46425.jpg',
  Tomatos: 'https://i.pinimg.com/736x/4b/1a/58/4b1a5831900aa601fde4c7ddb48a271f.jpg',
  Herbs: 'https://i.pinimg.com/564x/c5/a2/e3/c5a2e381d4b2ed62817bf532816512cc.jpg',
  Condiments: 'https://i.pinimg.com/564x/d2/3c/38/d23c383eae2018c88e24d070b2e8ef5d.jpg',
}


const list = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient =>{
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  const img = document.createElement('img');
  img.alt = `${ingredient}`;
  const arrOfImages = Object.keys(images);
  arrOfImages.forEach(image => {
    if (image === ingredient) {
      img.src = `${images[image]}`;
    }
  })
  item.appendChild(img);
  fragment.appendChild(item);
});

list.appendChild(fragment);