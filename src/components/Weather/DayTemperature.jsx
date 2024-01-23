import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getWeather } from "../../services/weatherApi";
import { getCity } from "../../services/cityApi";

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};

const formatWeekDay = (date) => {
  const options = { weekday: "long" };
  return date.toLocaleDateString("pt-BR", options);
};

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

export default function DayTemperature({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityData = await getCity(city);
        const latitude = cityData[0].lat;
        const longitude = cityData[0].lon;

        const data = await getWeather(latitude, longitude);
        setWeatherData(data);
      } catch (error) {
      }
    };

    fetchData();
  }, [city]);

  const today = new Date();
  const formattedDate = formatDate(today);
  const formattedWeekDay = formatWeekDay(today);

  return (
    <>
      <WeatherIcon />
      <TemperatureDay>
        {" "}
        {weatherData?.main?.temp_min !== undefined
          ? kelvinToCelsius(weatherData.main.temp_min).toFixed(0) + "°C"
          : "-"}
      </TemperatureDay>
      <WeatherDescription>
        {weatherData?.weather?.[0]?.description !== undefined
          ? `${weatherData.weather[0].description}`
          : "-"}
      </WeatherDescription>
      <Divider />
      <NumberDay>{formattedDate}</NumberDay>
      <WeekDay>{formattedWeekDay}</WeekDay>
    </>
  );
}

const WeatherIcon = styled.div`
  font-size: 100px;
  margin-bottom: 30px;
`;

const WeatherDescription = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

const NumberDay = styled.div`
  font-size: 40px;
`;

const WeekDay = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;

const TemperatureDay = styled.h1`
  font-size: 130px;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    font-size: 130px;
    margin-bottom: 30px;
  }
`;

const Divider = styled.hr`
  width: 70%;
  height: 5px;
  border: none;
  background-color: #ededed;
  margin-bottom: 30px;
`;
