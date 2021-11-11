const container = document.querySelector('.container');
const card = document.querySelector('svg');
const { width, height } = container.getBoundingClientRect();

container.addEventListener('mousemove', (event) => {
  const { offsetX, offsetY } = event;

  card.style.setProperty('--position-x', (offsetX / width) - 0.5);
  card.style.setProperty('--position-y', (offsetY / height) - 0.5);
});