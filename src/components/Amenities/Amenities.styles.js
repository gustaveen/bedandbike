import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const AmenitiesRoot = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.palette.gray.main};
`;

export const AmenitiesContainer = styled.div`
  justify-content: space-between;
  max-width: 1220px;
  width: 100%;
  margin-left: 4%;
  margin-right: 4%;
  padding: 40px 0;
  
  @media ${breakpoints.ml} {
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media ${breakpoints.lg} {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const Content = styled.div`

  @media ${breakpoints.ml} {
    width: 50%;
  }
`;

export const Text = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.4;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: 700;

  @media ${breakpoints.ml} {  
    margin-bottom: 24px;
    font-size: 2.4rem;
  }
`;

export const List = styled.div`
  max-width: 500px;
  margin-top: 32px;
  text-align: left;

  @media ${breakpoints.ml} {
    width: 50%;
    margin-top: 0;
  }
`;

export   const Item = styled.li`
  display: inline-flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding-left: 1vw;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${props => props.theme.palette.gray.dark};

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    background-image: url(${props => props.img});
  }

  @media ${breakpoints.sm} {  
    width: 50%;
  }

  @media ${breakpoints.md} {  
    width: 50%;
    padding-left: 0;

    &:before {
      margin-right: 16px;
    }
  }
`;
