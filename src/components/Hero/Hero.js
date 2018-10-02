import React from 'react'
import Img from 'gatsby-image'
// import { FormattedMessage } from 'react-intl';

class Hero extends React.Component {

  render() {
    const { image } = this.props;
    console.log(image);
    
    return(
      <div className="Hero">
        <Img fluid={image} 
          alt="heero"
        />
        <h1 className="Hero__Title">Välkommen till Öckero</h1>
      </div>
    );
  }
}

export default Hero;
