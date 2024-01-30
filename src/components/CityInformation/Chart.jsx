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
    return <div>Carregando...</div>;
  }

  return (
    <ChartContainer>
      <LineChart
        width={800}
        height={350}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
      >
        <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
        <CartesianGrid stroke="#000000" strokeDasharray="5 5" />
        <XAxis
          dataKey="name"
          tick={({ x, y, payload }) => (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
              {payload.value}
            </text>
          )}
        />
        <YAxis tickFormatter={(value) => `${value}°C`} />
        <Tooltip />
      </LineChart>
    </ChartContainer>
  );
}
const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100pw;
  height: 100ph;
  margin: 50px;
  padding: 10px;
`;
