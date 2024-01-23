import React from "react";
import CityWeather from "../../components/CityInformation/CityWeather";
import InfoContainer from "../../components/CityInformation/InfoContainer";
import ContainerRight from "../../components/ContainerRight";

export default function CityInformationPage({city}) {
  return (
    <ContainerRight>
      <CityWeather city={city}/>
      <InfoContainer city={city}/>
    </ContainerRight>
  );
}
