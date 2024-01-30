import React from "react";
import CityWeather from "../../components/CityInformation/CityWeather";
import InfoContainer from "../../components/CityInformation/InfoContainer";
import ContainerRight from "../../components/ContainerRight";
import Chart from "../../components/CityInformation/Chart";

export default function CityInformationPage({city}) {
  return (
    <ContainerRight>
      <CityWeather city={city}/>
      <InfoContainer city={city}/>
      <Chart city={city}/>
    </ContainerRight>
  );
}
