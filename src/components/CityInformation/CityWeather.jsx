import React, { useState } from "react";
import styled from "styled-components";
import { getWeather } from "../../services/weatherApi";

export default function CityWeather() {
  const [weatherData, setWeatherData] = useState(null);

  const handleClick = async () => {
    try {
      const latitude = 44.34;
      const longitude = 10.99;

      const data = await getWeather(latitude, longitude);
      setWeatherData(data);
    } catch (error) {
      console.error("Erro ao obter dados do clima:", error);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Obter Clima</button>
      <InitialPhrase>Previsão do tempo para...</InitialPhrase>
      <City>
        {weatherData?.name !== undefined ? `${weatherData.name}` : "-"}
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
  font-size: 20px;
  margin-left: 30px;
`;

const GeographicCoordinates = styled.div`
  ${baseStyle}
`;

const InitialPhrase = styled.div`
  ${baseStyle}
  margin-left: 30px;
  font-size: 30px;
`;

const City = styled.div`
  ${baseStyle}
  margin-left: 30px;
  font-size: 60px;
`;