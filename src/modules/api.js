const hitAPI = async (city) => {
  try {
    console.log('Fetching weather data');
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c59d34581182187599601a68c72dcacd`
    );
    const data = await response.json();

    return loadInformation(data);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

const loadInformation = (data) => {
  const information = {
    name: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    weather: data.weather[0].main,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    icon: data.weather[0].icon,
  };
  return information;
};

export { hitAPI };
