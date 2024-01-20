import ContainerLeft from "../../components/ContainerLeft";
import CityInput from "../../components/Weather/CityInput";
import DayTemperature from "../../components/Weather/DayTemperature";
import WeatherTitle from "../../components/Weather/WeatherTitle";

export default function WeatherPage() {
  return (
    <>
      <ContainerLeft>
        <WeatherTitle />
        <CityInput />
        <DayTemperature />
      </ContainerLeft>
    </>
  );
}
