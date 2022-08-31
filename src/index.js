import { hitAPI } from './modules/weather';
import { drawInfoC } from './modules/front';
import './styles.css';

const btn = document.querySelector('.getWeather');
const input = document.querySelector('.input');
btn.addEventListener('click', () => {
  if (input.value.length != 0) {
    const infor = hitAPI(input.value);
    drawInfoC(infor);
  }
});
