import styled, { ThemeProvider } from 'styled-components';
import { breakpoints } from '../breakpoints';
import { Link } from 'gatsby';

export const List = styled.ul`
  display: none;
  padding-top: 5px;
  margin-left: auto;
  margin-right: 10px;

  @media ${breakpoints.md} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media ${breakpoints.lg} {
    padding-top: 3px;
  }
`;

export const Item = styled.li`
  float: left;
  margin-left: 15px;

  &:first-child {
    margin-left: 0px;
  }

  @media ${breakpoints.lg} {
    margin-left: 20px;
  }
`;

export const ItemLink = styled(Link)`
  display: block;
  font-size: 1.4rem;
  color: black;
  letter-spacing: 0.8px;
  font-weight: bold;
  padding: 5px 0;
  border-bottom: 2px solid white;
  position: relative;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    opacity: 0;
    transform: translateY(2px);
    transition: all 0.2s ease-in-out 0s;
  }

  &--Active:before,
  &:hover:before {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  @media ${breakpoints.lg} {
    font-size: 1.6rem;
  }
`;
