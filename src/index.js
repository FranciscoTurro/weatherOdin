import { hitAPI } from './modules/weather';
import { drawInfoC, drawInfoF } from './modules/front';

const asd = document.querySelector('.cel');
const input = document.querySelector('.input');
asd.addEventListener('click', () => {
  if (input.value.length != 0) {
    const infor = hitAPI(input.value);
    drawInfoC(infor);
  }
});

const convert = document.querySelector('.far');
convert.addEventListener('click', () => {
  const infor = hitAPI(input.value);
  drawInfoF(infor);
});
