import React from "react";
import styled from "styled-components";

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

export default function DayTemperature() {
  const today = new Date();
  const formattedDate = formatDate(today);
  const formattedWeekDay = formatWeekDay(today);

  return (
    <>
      <WeatherIcon />
      <TemperatureDay>31°C</TemperatureDay>
      <WeatherDescription>Céu Aberto</WeatherDescription>
      <Divider />
      <NumberDay>{formattedDate}</NumberDay>
      <WeekDay>{formattedWeekDay}</WeekDay>
    </>
  );
}

const WeatherIcon = styled.div`
  font-size: 100px;
`;
const WeatherDescription = styled.div`
  font-size: 50px;
`;
const NumberDay = styled.div`
  font-size: 40px;
`;
const WeekDay = styled.div`
  font-size: 40px;
`;

const TemperatureDay = styled.h1`
  @media (min-width: 600px) {
    font-size: 130px;
    margin-bottom: 20px;
  }
`;

const Divider = styled.hr`
  width: 400px;
  height: 5px;
  border: none;
  background-color: #ededed;
`;
