import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

// export const CardRoot = styled.div`

// `;

export const CardContainer = styled.div`
  display: block;
  color: black;
`;

export const CardTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 2rem;
  font-weight: 700;

  @media ${breakpoints.ml} {  
    font-size: 2.4rem;
  }
`;

export const CardText = styled.div`
  font-size: 1.6rem;
  line-height: 1.325;

  @media ${breakpoints.ml} {  
    font-size: 1.8rem;
  }
`;