import axios from 'axios';

const WEATHER_API_URL = 'https://weatherapi-com.p.rapidapi.com/current.json'
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const WEATHER_API_HOST = import.meta.env.VITE_WEATHER_API_HOST

const options = {
  method: 'GET',
  url: WEATHER_API_URL,
  params: { q: null },
  headers: {
    'X-RapidAPI-Key': WEATHER_API_KEY,
    'X-RapidAPI-Host': WEATHER_API_HOST
  }
};

const getWeatherByCapital = (capital) => {
  options.params.q = capital
  const request = axios.request(options)

  return request.then(res => {
    const { data } = res

    return {
      temperature: data.current.temp_c,
      wind: data.current.wind_kph,
      icon: `http:${data.current.condition.icon}`
    }
  })
}

export default {
  getWeatherByCapital
}