const name = document.querySelector('.cityName');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const drawInfo = (data) => {
  //receives a promise
  data.then((information) => {
    name.textContent = information.name;
    temperature.textContent = `Temperature: ${information.temperature} °C`;
    weather.textContent = information.weather;
    humidity.textContent = `Humidity: ${information.humidity}%`;
    wind.textContent = `Wind: ${information.wind} m/s`;
  });
};

export { drawInfo };
