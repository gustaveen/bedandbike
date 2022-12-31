import React from 'react';
// import Link from 'gatsby-link'
import { FormattedHTMLMessage } from 'react-intl';

import bike from '../../assets/svg/bike.svg';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const IntroRoot = styled.div`
  background-color: #f9f9f9;
`;

const IntroContainer = styled.div`
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  @media ${breakpoints.ml} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media ${breakpoints.xl} {
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

const IntroIcon = styled.img`
  display: inline-block;
  margin-bottom: 20px;
`;

const IntroText = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-left: 2rem;
  padding-right: 2rem;

  a {
    color: ${props => props.theme.palette.blue.main};
    &:hover {
      text-decoration: underline;
    }
  }

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

const Intro = ({ text }) => {
  return (
    <IntroRoot>
      <IntroContainer>
        <IntroIcon src={bike} alt="logo" />
        <IntroText>{text}</IntroText>
      </IntroContainer>
    </IntroRoot>
  );
};

export default Intro;
