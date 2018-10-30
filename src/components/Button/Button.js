import React from 'react'
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const StyledButton = styled.button`
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: ${props => props.theme.palette.blue.main};
  text-decoration: none;
  border: 0;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
      background-color: ${props => props.theme.palette.blue.dark};
  }

  @media ${breakpoints.md} {
    padding: 19px 35px;
    font-size: 1.4rem;
  }
`;

const Button = (props) => (
  <StyledButton {...props} />
)

export default Button;
