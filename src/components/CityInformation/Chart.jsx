import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCity } from "../../services/cityApi";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getForecast } from "../../services/forecastApi";

export default function Chart({ city }) {
  const [forecastData, setForecastData] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityInfo = await getCity(city);

        const latitude = cityInfo[0].lat;
        const longitude = cityInfo[0].lon;
        if (city === null) {
          latitude = 0;
          longitude = 0;
        }
        const forecastInfo = await getForecast(latitude, longitude);
        setCityData(cityInfo);
        setForecastData(forecastInfo);
      } catch (error) {
        console.error("Erro ao obter dados do clima:", error);
      }
    };

    fetchData();
  }, [city]);

  let ldays = [];
  let ltemps = [];

  for (let i = 0; i < forecastData?.list.length; i++) {
    const dayTimestamp = forecastData.list[i].dt_txt;
    const date = new Date(dayTimestamp);
    const day = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;
    ldays.push(day);
    const tempKelvin = forecastData.list[i].main.temp;
    const tempCelsius = (tempKelvin - 273.15).toFixed(1);
    ltemps.push(`${tempCelsius}°C`);
  }

  const data = ldays.map((formattedDate, index) => {
    let originalDate = ldays[index];
    let parts = originalDate.split("/");
    let newDate = `${parts[1]}/${parts[0]}`;
    const dayOfWeek = new Date(newDate).toLocaleDateString("pt-BR", {
      weekday: "short",
    });

    return {
      name: `${formattedDate} (${dayOfWeek})`,
      temp: parseFloat(ltemps[index]),
    };
  });
  if (!forecastData) {
    return <div></div>;
  }

  return (
    <ChartContainer>
      <h1>Próximos dias</h1>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
      >
        <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
        <CartesianGrid stroke="#e7e7e7" strokeDasharray="0" />
        <XAxis
          dataKey="name"
          tick={({ x, y, payload }) => (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
              {payload.value}
            </text>
          )}
        />
        <YAxis tickFormatter={(value) => `${value}°C`} />
        <Tooltip
          content={({ label, payload }) => (
            <CustomTooltip label={label} payload={payload} />
          )}
        />
      </LineChart>
    </ChartContainer>
  );
}
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  margin: 20px;
  padding: 10px;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
`;

const StyledTooltipContainer = styled.div`
  background: #d8d8d8;
  border: 1px solid #ccc;
  padding: 10px;
  height: 50px;
`;

const StyledTooltipLabel = styled.p`
  margin: 0;
`;

const StyledTooltipValue = styled.p`
  margin: 0;
  color: #8884d8;
`;

const CustomTooltip = ({ label, payload }) => (
  <StyledTooltipContainer>
    <StyledTooltipLabel>{label}</StyledTooltipLabel>
    {payload && payload.length > 0 && (
      <StyledTooltipValue>{payload[0].payload.temp} °C</StyledTooltipValue>
    )}
  </StyledTooltipContainer>
);
