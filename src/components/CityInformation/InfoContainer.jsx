import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getWeather } from "../../services/weatherApi";
import { getCity } from "../../services/cityApi";

export default function InfoContainer({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  const isCoatNeeded = () => {
    const maxTempCelsius =
      weatherData?.main?.temp_max !== undefined
        ? kelvinToCelsius(weatherData.main.temp_max).toFixed(0)
        : null;

    return maxTempCelsius !== null && parseInt(maxTempCelsius) < 17;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city !== null) {
          const cityInfo = await getCity(city);

          let latitude = cityInfo[0].lat;
          let longitude = cityInfo[0].lon;
          
          const data = await getWeather(latitude, longitude);
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Erro ao obter dados do clima:", error);
      }
    };

    fetchData();
  }, [city]);

  const coatPhrase = city !== null ? (isCoatNeeded() ? 'Leva um casaquinho' : 'Não, você não deve levar um casaquinho') : null;

  return (
    <>
     <Container>
        <Info>
          Mínima
          <span className="custom-font">
            {weatherData?.main?.temp_min !== undefined
              ? kelvinToCelsius(weatherData.main.temp_min).toFixed(0) + "°C"
              : "-"}
          </span>
        </Info>

        <Info>
          Máxima
          <span className="custom-font">
            {weatherData?.main?.temp_min !== undefined
              ? kelvinToCelsius(weatherData.main.temp_max).toFixed(0) + "°C"
              : "-"}
          </span>
        </Info>

        <Info>
          Umidade
          <span className="custom-font">
            {weatherData?.main?.humidity !== undefined
              ? `${weatherData.main.humidity}%`
              : "-"}
          </span>
        </Info>

        <Info>
          Vento
          <span className="custom-font">
            {weatherData?.wind?.speed !== undefined
              ? `${weatherData.wind.speed.toFixed(1)} m/s`
              : "-"}
          </span>
        </Info>
      </Container>

      {coatPhrase && <CoatPhrase>{coatPhrase}</CoatPhrase>}
    </>
  );
}

const Container = styled.div`
  width:100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 120px;
  padding: 10px;
  border-radius: 32px;
  background-color: #4d4494;
  color: white;
  font-size: 22px;
  font-weight: 600;
  margin-right:10px;

  .custom-font {
    margin-top: 15px;
    font-size: 40px;
  }
`;

const CoatPhrase = styled.div`
  font-size: 24px;
  margin: 20px;
  color: #afadad;
  text-align: left;
`;
