import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import WeatherPage from "./pages/weather";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="weather" element={<WeatherPage />} />
            <Route index path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
