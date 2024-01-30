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

  const iconCode = weatherData?.weather?.[0]?.icon;

  const weatherImage = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : "-";

  const textColor =
    iconCode &&
    (iconCode.slice(-1) === "d"
      ? "#EC6E4C"
      : iconCode.slice(-1) === "n"
      ? "#696969"
      : "");

  const weatherDescriptions = {
    "01": "Céu claro",
    "02": "Céu parcialmente nublado",
    "03": "Céu nublado",
    "04": "Céu encoberto",
    "09": "Chuva fraca",
    10: "Chuva moderada",
    11: "Tempestade",
    13: "Neve",
    50: "Neblina",
  };
  const weatherDescription = weatherData?.weather?.[0]?.icon?.slice(0, 2);
  const description = weatherDescriptions[weatherDescription];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityData = await getCity(city);
        const latitude = cityData[0].lat;
        const longitude = cityData[0].lon;

        const data = await getWeather(latitude, longitude);
        setWeatherData(data);
      } catch (error) {}
    };

    fetchData();
  }, [city]);

  const today = new Date();
  const formattedDate = formatDate(today);
  const formattedWeekDay = formatWeekDay(today);

  return (
    <>
      <WeatherIcon />

      <TemperatureDay textColor={textColor}>
        {weatherData?.weather?.[0]?.description !== undefined ? (
          <img src={weatherImage} alt="Weather Image" />
        ) : (
          <div></div>
        )}{" "}
        {weatherData?.main?.temp_min !== undefined
          ? kelvinToCelsius(weatherData.main.temp_min).toFixed(0) + "°C"
          : "-"}
      </TemperatureDay>
      <WeatherDescription>
        {weatherData?.weather?.[0]?.description !== undefined
          ? `${description}`
          : "-"}
      </WeatherDescription>
      <Divider />
      <NumberDay>{formattedDate}</NumberDay>
      <WeekDay>{formattedWeekDay}</WeekDay>
    </>
  );
}

const WeatherIcon = styled.div`
  font-size: 60px;
  margin-bottom: 25px;
`;

const WeatherDescription = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  color: #222222;
`;

const NumberDay = styled.div`
  font-size: 30px;
  color: #222222;
`;

const WeekDay = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  color: #222222;
`;

const TemperatureDay = styled.h1`
  font-size: 100px;
  margin-bottom: 30px;
  color: ${(props) => props.textColor || "inherit"};

  @media (min-width: 600px) {
    font-size: 100px;
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
