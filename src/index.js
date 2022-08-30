import { hitAPI } from './modules/weather';
import { drawInfo } from './modules/front';

const asd = document.querySelector('.asd');
const input = document.querySelector('.input');
asd.addEventListener('click', () => {
  if (input.value.length != 0) {
    const infor = hitAPI(input.value);
    drawInfo(infor);
  }
});
