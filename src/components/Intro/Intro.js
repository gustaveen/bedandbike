import React from 'react'
// import Link from 'gatsby-link'
// import { FormattedMessage } from 'react-intl';

import bike from '../../assets/svg/bike.svg'

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const IntroRoot = styled.div`
  background-color: #F9F9F9;
`;

const IntroContainer = styled.div`
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  @media ${breakpoints.md} {  
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
  font-size: 1.8rem; 
  line-height: 1.4;

  @media ${breakpoints.md} {  
    font-size: 2.2rem;
  }

  @media ${breakpoints.md} {  
    font-size: 2.6rem;
  }
`;

const Intro = () => {
  return (
    <IntroRoot>
      <IntroContainer>
        <IntroIcon src={bike} alt="logo" />
        <IntroText>
            {/* <FormattedMessage id="introText" /> */}
            Välkommen till Bed & Bike Öckerö, en pärla för aktiviteter och rekreation. Hos oss kan du njuta av husets lugn, vackra rum och nyttig frukost. Du kan hyra cykel och kajak. Vi kan erbjuda förslag på turer såväl med <strong>cykel</strong>, <strong>kajak</strong> som <strong>vandring</strong>.
        </IntroText>
      </IntroContainer>
    </IntroRoot>
  );
}

export default Intro;


