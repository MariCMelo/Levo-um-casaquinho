import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Weather from "../../components/Weather";


export default function Dashboard() {
  return (
    <Container>
      <Weather />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  background-color: pink;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

