const images = [
  'image/background-g34b50b90b_1920.png',
  'image/mountains-gabd29b24f_1920.jpg',
  'image/space-g9bb0a681b_1920.jpg'
]

const image = document.body;
const imageRandom = images[Math.floor(Math.random() * images.length)];

image.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 
  ,url(${imageRandom})`; // 그라데이션으로 바탕화면 어둡게 추가
