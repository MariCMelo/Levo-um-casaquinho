import styled from 'styled-components';
import Page from '../components/Page';


export default function Dashboard({children}) {
<Page>
<StyledContainer width="1040px" height="680px">
        {children}
      </StyledContainer>
</Page>

}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  padding: 0;
  
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
