const name = document.querySelector('.cityName');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const drawInfoC = (data) => {
  //receives a promise
  data.then((information) => {
    name.textContent = information.name;
    temperature.textContent = `Temperature: ${information.temperature} °C`;
    weather.textContent = information.weather;
    humidity.textContent = `Humidity: ${information.humidity}%`;
    wind.textContent = `Wind: ${information.wind} m/s`;
  });
};

const drawInfoF = (data) => {
  //receives a promise
  data.then((information) => {
    name.textContent = information.name;
    temperature.textContent = `Temperature: ${Math.round(
      information.temperature * 1.8 + 32
    )} °F`;
    weather.textContent = information.weather;
    humidity.textContent = `Humidity: ${information.humidity}%`;
    wind.textContent = `Wind: ${Math.round(information.wind * 2.236936)} m/s`;
  });
};

export { drawInfoC, drawInfoF };
