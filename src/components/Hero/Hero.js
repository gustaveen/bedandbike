import React from 'react';
import Img from 'gatsby-image';

import { HeroRoot, HeroTitle, HeroByline, HeroContainer } from './Hero.styles';

const Hero = props => {
  const { image, byline, left, title } = props;
  return (
    <HeroRoot>
      {image && <Img fluid={image} alt="hero" />}
      <HeroContainer left={left}>
        <HeroTitle left={left}>{title}</HeroTitle>
        {byline && <HeroByline>{byline}</HeroByline>}
      </HeroContainer>
    </HeroRoot>
  );
};

export default Hero;
