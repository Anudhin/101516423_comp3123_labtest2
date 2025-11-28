
const API_KEY = '81d0419df91f5bac58d600bc44f71335';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherByCity(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('City not found');
  }

  const data = await res.json();
  return data;
}
