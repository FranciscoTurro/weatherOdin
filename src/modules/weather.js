const hitAPI = async (city) => {
  try {
    console.log('Beginning fetch');
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
    temperature: data.main.temp,
    weather: data.weather[0].main,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };
  return information;
};

export { hitAPI };
