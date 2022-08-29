const getWeatherInfo = async (city) => {
  try {
    console.log('Waiting for fetch to complete');
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c59d34581182187599601a68c72dcacd`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error: ' + error);
  }
};

const asd = document.querySelector('.asd');
asd.addEventListener('click', () => {
  getWeatherInfo('tokyo').then((response) => {
    console.log(
      `Weather in ${response.name}, ${response.sys.country}: ${Math.round(
        response.main.temp - 273
      )} °C`
    );
  });
});
