import React, { useState } from "react";
import ContainerLeft from "../../components/ContainerLeft";
import CityInput from "../../components/Weather/CityInput";
import DayTemperature from "../../components/Weather/DayTemperature";
import WeatherTitle from "../../components/Weather/WeatherTitle";

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <>
      <ContainerLeft>
        <WeatherTitle />
        <CityInput onCityChange={setSelectedCity}/>
        <DayTemperature city={selectedCity}/>
      </ContainerLeft>
    </>
  );
}
