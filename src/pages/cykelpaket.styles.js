import styled, { ThemeProvider } from "styled-components";
import { breakpoints } from "../components/breakpoints";

export const Article = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 4%;

  @media ${breakpoints.lg} {
    display: flex;
    margin-top: 32px;
  }
`;

export const Sidebar = styled.div`
  flex: 1 0 auto;
  

  @media ${breakpoints.lg} {
    width: 250px;
    margin-top: 1rem;
    margin-right: 4rem;
  }
`;

export const SidebarTitle = styled.h4`
  padding-top: 20px;
  margin-bottom: 12px;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  margin-bottom: 12px;
  padding-left: 1em;
  font-size: 1.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    width: 0.7rem;
    height: 0.7rem;
    margin-left: -1em;
    margin-right: 1rem;
    border-radius: 100%;
    background-color: ${props => props.theme.palette.blue.main};
  }
`;

export const Content = styled.div`
  h3 {
    margin-bottom: 16px;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 1.6rem;
    font-size: 1.8rem;
    line-height: 1.666667;

    @media ${breakpoints.lg} {
      margin-bottom: 2rem;
    }
  }

  span {
    display: block;
    margin-top: 0.8rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 2;
    text-align: center;
    color: #8b8b8b;
  }
`;

export const ContentTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 1.6rem;
  line-height: 1.4;

  @media ${breakpoints.md} {
    font-size: 2rem;
  }

  @media ${breakpoints.ml} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lg} {
    font-size: 2.6rem;
  }
`;

export const Price  = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 8px;
  border-bottom: 1px solid #eaeaea;
`;

export const PriceText = styled.p`
  font-size: 1.6rem;
  line-height: 1.33;
  color: ${props => props.theme.palette.gray.dark};
`;

export const PriceAmount = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.2;
`;
