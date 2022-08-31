const name = document.querySelector('.cityName');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const feelsLike = document.querySelector('.feelsLike');
const icon = document.querySelector('.icon');

const drawInfoC = (data) => {
  //receives a promise
  data.then((information) => {
    name.textContent = `${information.name}, ${information.country}`;
    temperature.textContent = `${Math.round(information.temperature)} °C`;
    feelsLike.textContent = `Feels like: ${Math.round(
      information.feelsLike
    )} °C`;
    weather.textContent = information.weather;
    humidity.textContent = `Humidity: ${information.humidity}%`;
    wind.textContent = `Wind: ${information.wind} m/s`;
    icon.src = `http://openweathermap.org/img/wn/${information.icon}.png`;
  });
};

export { drawInfoC };
