import React, { useState } from "react";
import styled from "styled-components";
import WeatherPage from "../pages/weather";
import CityInformationPage from "../pages/graphics";

export default function Weather() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
      <WeatherContainer>
        <WeatherPage onCityChange={handleCityChange} />
        <CityInformationPage city={selectedCity} />
      </WeatherContainer>
    </>
  );
}

const WeatherContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
