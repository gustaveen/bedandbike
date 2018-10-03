import React from 'react'
import Img from 'gatsby-image'
// import { FormattedMessage } from 'react-intl';

import {
    HeroRoot,
    HeroTitle,
} from './Hero.styles';

const Hero = (props) => {
  const { image } = props;
  console.log(image);
  
  return(
    <HeroRoot>
      <Img fluid={image} 
        alt="hero"
      />
      <HeroTitle>Välkommen till Öckero</HeroTitle>
    </HeroRoot>
  );
}

export default Hero;
