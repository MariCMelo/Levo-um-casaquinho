import api from "./externalApi";

export async function getCity(city) {
  
  const baseURL = import.meta.env.VITE_API_URL_CITY;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `${baseURL}?q=${city},&limit=1&appid=${apiKey}`;

  const response = await api.get(url);
  return response.data;
}

