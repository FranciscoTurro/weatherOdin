const hitAPIWeather = async (city) => {
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

const setBackgroundPicture = async (theme) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=29637230-d89de1b4a0f0e9d97abfddc8f&q=${theme}&image_type=photo&min_width=1920&min_height=1080`
    );
    const data = await response.json();

    const randomNum = Math.floor(Math.random() * 10);

    const imageURL = data.hits[randomNum].largeImageURL;
    document.body.style.backgroundImage = `url(${imageURL})`;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

export { hitAPIWeather, setBackgroundPicture };
