const colors = [
  'red',
  'lime',
  'purple',
  'green',
  'gold',
  'silver',
  'OrangeRed',
  'gray',
  'black',
  'skyblue',
  'navy',
  'Violet',
  'magenta',
  'blueviolet',
  'LightSalmon',
  'FireBrick',
  'HotPink',
  'PaleVioletRed',
  'MediumVioletRed',
];

const container = document.querySelector('section');
const selectColor = document.querySelector('#selectColor');
const h1 = document.querySelector('h1');

for (let color of colors) {
  let box = document.createElement('div');
  container.appendChild(box);
  box.classList.add('box');
  box.style.backgroundColor = color;
  box.addEventListener('click', () => {
    h1.innerText = 'You have selected color: ';
    selectColor.innerText = box.style.backgroundColor;
    selectColor.style.backgroundColor = box.style.backgroundColor;
  });
}
