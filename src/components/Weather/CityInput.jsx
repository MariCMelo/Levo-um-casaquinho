import React, { useState } from "react";
import styled from "styled-components";
import { SearchOutline } from "react-ionicons";

export default function CityInput({ onCityChange }) {
  const [cityName, setCityName] = useState("");

  function formatCityNameForURL(cityName) {
    const formattedName = cityName.replace(/\s+/g, "%20");
    const cleanName = formattedName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return cleanName;
  }

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      const formattedCityName = formatCityNameForURL(cityName);
      onCityChange(formattedCityName);

      setCityName("");
    }
  };

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <StyledCityInput>
      <SearchOutline
        className="search-icon"
        color="#555"
        height="30px"
        width="35px"
      />
      <input
        placeholder="Procure por uma cidade"
        value={cityName}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
    </StyledCityInput>
  );
}

const StyledCityInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 50vh;
    height: 60px;
    padding: 8px;
    font-size: 30px;
    border: 1px solid transparent;
    background-color: #ededef;
    border-radius: 24px;
    padding-left: 40px;

    &:focus {
      outline: none;
    }
  }

  .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
  }
`;
