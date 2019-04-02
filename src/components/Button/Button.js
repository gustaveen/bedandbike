import React from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints";

const StyledButton = styled.a`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
    padding: 16px 30px;
    font-size: 1.4rem;
  }
`;

const Button = props => (
  <StyledButton href={props.to} target="_blank" rel="noopener" {...props} />
);

export default Button;
