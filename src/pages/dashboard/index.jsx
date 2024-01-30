import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Weather from "../../components";


export default function Dashboard() {
  return (
    <Container>
      <Weather />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

