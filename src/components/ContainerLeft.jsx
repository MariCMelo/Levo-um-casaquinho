import styled from 'styled-components';

export default styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  max-width: 40%; 
  background-color: white;
  overflow: hidden;

  @media (max-width: 600px) {
    max-width: 100%; 
    height: 100%;
  }
`;