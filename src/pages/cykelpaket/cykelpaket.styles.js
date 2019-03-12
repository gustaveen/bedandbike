import styled, { ThemeProvider } from 'styled-components';
import { breakpoints } from '../../components/breakpoints';

export const Section = styled.div`
  max-width: calc(1220px + 8%);
  margin: 40px auto;
  padding-left: 4%;
  padding-right: 4%;  

  @media ${breakpoints.ml} {  
    margin-top: 60px;
    margin-bottom: 60px;
  }

  @media ${breakpoints.lg} {  
    margin-top: 75px;
    margin-bottom: 75px;
  }
`;