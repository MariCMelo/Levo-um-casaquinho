import api from "./externalApi";

export async function getWeather(lat, lon) {
  const baseURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await api.get(url);
  return response.data;
}

