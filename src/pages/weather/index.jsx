import React, { useState } from "react";
import ContainerLeft from "../../components/ContainerLeft";
import CityInput from "../../components/Weather/CityInput";
import DayTemperature from "../../components/Weather/DayTemperature";
import WeatherTitle from "../../components/Weather/WeatherTitle";

export default function WeatherPage({ onCityChange }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (city) => {
    setSelectedCity(city);
    onCityChange(city);
  };

  return (
    <>
      <ContainerLeft>
        <WeatherTitle />
        <CityInput onCityChange={handleCityChange} />
        <DayTemperature city={selectedCity} />
      </ContainerLeft>
    </>
  );
}
