import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import PinkCoat from "../../assets/pinkCoat.png";

export default function WeatherTitle() {
  return (
    <>
      <WeatherLogo>
        <CoatImg src={PinkCoat} alt="Pink Coat" />
        <Title>Levo um Casaquinho?</Title>
      </WeatherLogo>
    </>
  );
}

const WeatherLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const CoatImg = styled.img`
  width: 120px;
  height: 120px;
  justify-content: center;
`;
