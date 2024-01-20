import styled from "styled-components";
import ContainerLeft from "../ContainerLeft";
import ContainerRight from "../ContainerRight";
import WeatherTitle from "./WeatherTitle";
import CityInput from "./CityInput";
import DayTemperature from "./DayTemperature";
import WeatherPage from "../../pages/weather";

export default function Weather() {
  return (
    <>
    <WeatherContainer>
      <WeatherPage />
      <ContainerRight>
        <h1>Oieee</h1>
      </ContainerRight>
    </WeatherContainer>
    </>
  );
}

const WeatherContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
