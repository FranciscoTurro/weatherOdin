import { hitAPI } from './modules/api';
import { drawInfoC } from './modules/front';
import './styles.css';

const input = document.querySelector('.search');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (input.value.length != 0) {
      const infor = hitAPI(input.value);
      drawInfoC(infor);
      input.value = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const infor = hitAPI('buenos aires');
  drawInfoC(infor);
});
