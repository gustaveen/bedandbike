import React from 'react';
import { Link } from '../../i18n';
import Img from 'gatsby-image'

import {
  CardContainer,
  CardTitle,
  CardText
  } from './Card.styles';

const Card = ({
  children,
  image,
  to,
  title,
  text
}) => (
  <Link to={to}>
    <CardContainer>
      {image &&
        <Img fluid={image} 
          alt="biking"
        />
      }
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      {children}
    </CardContainer>
  </Link>
)

export default Card;