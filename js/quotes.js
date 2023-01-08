const images = [
  'image/background-g34b50b90b_1920.png',
  'image/mountains-gabd29b24f_1920.jpg',
  'image/space-g9bb0a681b_1920.jpg'
]

const image = document.body;
const imageRandom = images[Math.floor(Math.random() * images.length)];

image.style.backgroundImage = `url(${imageRandom})`;