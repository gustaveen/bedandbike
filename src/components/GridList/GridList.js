import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const StyledCardList = styled.div`
  & > * {
    display: block;
    margin-bottom: 20px;
  }

  @media ${breakpoints.md} {
    display: flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: -20px;

    & > * {
      display: flex;
      flex: 1;
      margin-left: 20px;
      text-decoration: none;
    }
  }

  @media ${breakpoints.lg} {
    grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  }
`;

const GridList = props => <StyledCardList {...props} />;

export default GridList;
