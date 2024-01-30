import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
