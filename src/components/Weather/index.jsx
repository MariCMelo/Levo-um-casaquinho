import styled from "styled-components";
import WeatherPage from "../../pages/weather";
import CityInformationPage from "../../pages/graphics";

export default function Weather() {
  return (
    <>
    <WeatherContainer>
      <WeatherPage />
      <CityInformationPage />
    </WeatherContainer>
    </>
  );
}

const WeatherContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
