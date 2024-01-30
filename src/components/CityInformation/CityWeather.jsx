import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import styled from "styled-components";
import { getWeather } from "../../services/weatherApi";
import { getCity } from "../../services/cityApi";

export default function CityWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        
        const cityInfo = await getCity(city);
        if (cityInfo.length === 0) {
          toast('Cidade não encontrada');
 
        }
console.log("INFO",cityInfo)

        const latitude = cityInfo[0].lat;
        const longitude = cityInfo[0].lon;
        if (city === null) {
          toast('Cidade não encontrada');
          latitude = 0;
          longitude = 0;
        }

        const weatherInfo = await getWeather(latitude, longitude);
console.log(cityData)
        setCityData(cityInfo);
        setWeatherData(weatherInfo);
      } catch (error) {
        console.error("Erro ao obter dados do clima:", error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      <InitialPhrase>Previsão do tempo para...</InitialPhrase>
      <City>
      <p>{cityData?.[0]?.local_names.pt || cityData?.[0]?.name || "-"}</p>
      </City>
      <GeographicCoordinates>
        <Coord>
          Latitude:{" "}
          {weatherData?.coord.lat !== undefined
            ? `${weatherData.coord.lat.toFixed(1) + "°"}`
            : "-"}
        </Coord>
        <Coord>
          Longitude:{" "}
          {weatherData?.coord.lon !== undefined
            ? `${weatherData.coord.lon.toFixed(1) + "°"}`
            : "-"}
        </Coord>
      </GeographicCoordinates>
    </>
  );
}

const baseStyle = `
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Coord = styled.div`
  ${baseStyle}
  font-size: 23px;
  margin-left: 30px;
`;

const GeographicCoordinates = styled.div`
  ${baseStyle}
`;

const InitialPhrase = styled.div`
  ${baseStyle}
  margin-top: 15px;
  margin-left: 30px;
  font-size: 23px;
`;

const City = styled.div`
  ${baseStyle}
  margin-left: 30px;
  font-size: 40px;
`;
