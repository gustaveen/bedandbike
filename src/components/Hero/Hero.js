import React from 'react'
import Img from 'gatsby-image'
// import { FormattedMessage } from 'react-intl';

import {
    HeroRoot,
    HeroTitle,
} from './Hero.styles';

class Hero extends React.Component {

  render() {
    const { image } = this.props;
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
}

export default Hero;
