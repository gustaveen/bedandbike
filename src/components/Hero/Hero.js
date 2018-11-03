import React from 'react'
import Img from 'gatsby-image'
// import { FormattedMessage } from 'react-intl';

import {
    HeroRoot,
    HeroTitle,
    HeroByline,
    HeroContainer,
} from './Hero.styles';

const Hero = (props) => {
  const { 
    image,
    byline,
    title,
  } = props;
  return(
    <HeroRoot>
      <Img fluid={image} 
        alt="hero"
      />
      <HeroContainer>
        <HeroTitle>{title}</HeroTitle>
        {byline &&
          <HeroByline>{byline}</HeroByline>
        }
      </HeroContainer>
    </HeroRoot>
  );
}

export default Hero;
