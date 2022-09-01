import { hitAPIWeather, setBackgroundPicture } from './modules/api';
import { drawInfoC } from './modules/front';
import './styles.css';

const input = document.querySelector('.search');
const titleIcon = document.querySelector('.titleIcon');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (input.value.length != 0) {
      const infor = hitAPIWeather(input.value);
      drawInfoC(infor);
      input.value = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const infor = hitAPIWeather('new york');
  drawInfoC(infor);
  titleIcon.src = '../src/img/icon.png';
  setBackgroundPicture('city');
});
