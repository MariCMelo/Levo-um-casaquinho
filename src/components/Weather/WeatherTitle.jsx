import React from "react";
import styled from "styled-components";

import PinkCoat from "../../assets/pinkCoat.png";

export default function WeatherTitle() {
  return (
    <>
      <WeatherLogo>
        <CoatImg src={PinkCoat} alt="Pink Coat" />
        <Title>Levo um casaquinho?</Title>
      </WeatherLogo>
    </>
  );
}

export const Title = styled.h1`
width: 40vh;
font-size:80px;
  @media (min-width: 400px) {
    font-size: 40px;
    margin-bottom: 80px;
    font-weight:600;
  }
`;

const WeatherLogo = styled.div`
  display: flex;
  text-align: center;
`;

const CoatImg = styled.img`
  width: 130px;
  height: 120px;
`;
