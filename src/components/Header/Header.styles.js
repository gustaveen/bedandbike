import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const HeaderRoot = styled.div`
  display: flex;
  width: 100%;
  font-weight: 500;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 20px;

  @media ${breakpoints.md} {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media ${breakpoints.lg} {
    display: flex;
    align-items: center;
  }
`;
