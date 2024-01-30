import styled from "styled-components";

export default styled.div`
  flex: 1;
  max-width: 60%;
  background-color: #d8d8d8;
  overflow: hidden;
  padding: 30px;

  @media (max-width: 600px) {
    max-width: 100%;
    height: 100%;
  }
`;
