import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.a`
  padding: 19px 35px;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: ${props => props.theme.palette.blue.main};
  text-decoration: none;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
      background-color: ${props => props.theme.palette.blue.dark};
  }
`;

const Button = (props) => (
  <StyledButton {...props} />
)

export default Button;
