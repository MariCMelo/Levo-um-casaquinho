import React, { useState, useEffect } from "react";
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
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

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
        console.log(latitude, longitude);
        const forecastInfo = await getForecast(latitude, longitude);
        console.log(forecastInfo);
        setCityData(cityInfo);
        setForecastData(forecastInfo);
      } catch (error) {
        console.error("Erro ao obter dados do clima:", error);
      }
    };

    fetchData();
  }, [city]);

  const renderCustomAxisTick = () => {
    // Verifica se há dados antes de renderizar o gráfico
    if (!forecastData) {
      return <div>Carregando...</div>;
    }

    return (
      <>
        <LineChart
          width={600}
          height={300}
          data={forecastData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#000000" strokeDasharray="5 5" />
          <XAxis dataKey="name" tick={renderCustomAxisTick} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </>
    );
  };

  return renderCustomAxisTick(); // Renderiza o gráfico
}
