import React from "react";
import CityWeather from "../../components/CityInformation/CityWeather";
import InfoContainer from "../../components/CityInformation/InfoContainer";
import ContainerRight from "../../components/ContainerRight";

export default function CityInformationPage() {
  return (
    <ContainerRight>
      <CityWeather />
      <InfoContainer />
    </ContainerRight>
  );
}
