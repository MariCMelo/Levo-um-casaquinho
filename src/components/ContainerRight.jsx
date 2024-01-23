import styled from 'styled-components';

export default styled.div`
  flex: 1; 
  max-width: 60%; 
  background-color: #D8D8D8;
  overflow: hidden;

  @media (max-width: 600px) {
    max-width: 100%; 
    height: 100%;
  }
`;