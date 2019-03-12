import styled, { css } from 'styled-components';
import { breakpoints } from '../breakpoints';

export const HeroRoot = styled.div`
  position: relative;
`;

export const HeroContainer = styled.div`
  position: absolute;
  top: ${props => props.left  ? 'auto' : '50%' };
  left: ${props => props.left  ? '0' : '50%' };
  width: 100%;
  text-align: center;
  color: white;
  transform: translate(-50%, -60%);

  ${props => props.left && css`
    bottom: 15%;
    max-width: 1220px;
    margin-left: 4%;
    margin-right: 4%;
    transform: none;
  `}
`;

export const HeroTitle = styled.h1`
  text-align: ${props => props.left  ? 'left' : 'center%' };
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.015em;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  @media ${breakpoints.sm} {  
    font-size: calc(40px + (72 - 40) * (100vw - 480px)/ (1440 - 480));
  }
  @media ${breakpoints.xxl} {  
    font-size: 7.2rem;
  }
`;

export const HeroByline = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;