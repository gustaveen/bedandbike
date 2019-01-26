import React from 'react'
import { FormattedMessage } from 'react-intl';
import Img from 'gatsby-image'
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';

// import Button from '../Button'

import pers from '../../../assets/svg/person.svg'
import bed from '../../../assets/svg/bed.svg'

const RoomRoot = styled.div`
  margin-bottom: 30px;
  background: ${props => props.theme.palette.gray.main};

  @media ${breakpoints.ml} {
    display: flex;
  }
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 24px 24px 32px;

  @media ${breakpoints.ml} {  
    width: 40%;
    padding: 54px 38px 38px;
  }
`;

const RoomInfoHeader = styled.div`
  flex-grow: 1;
`;

const RoomTitle = styled.p`
  margin-bottom: 8px;
  font-size: 2rem;
  font-weight: bold;

  @media ${breakpoints.ml} {  
    font-size: 2.4rem;
  }
`;

const RoomAction = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 24px;
  border-top: 1px solid #E1E1E1; 

  @media ${breakpoints.ml} {
      padding-top: 32px;
  }
`;

const RoomImage = styled.div`
  position: relative;

  @media ${breakpoints.ml} {
    width: 60%;
  }

  img {
      width: 100%;
      height: 100%;;
      object-fit: cover;
  }
`;

const RoomText = styled.p`
  font-size: 1.6rem;
  line-height: 1.33;
  color: ${props => props.theme.palette.gray.dark};

  @media ${breakpoints.ml} {
    font-size: 1.8rem;
  }
`;

const PriceText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.2;
`;

const Meta = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 14px;
  font-size: 1.4rem;
  
  &:before {
    position: relative;
    top: 1px;
    content: '';
    display: inline-block;
    width: 15px;
    height: 13px;
    margin-right: 5px;
    background-repeat: no-repeat; 
    background-image: url(${props => props.img});
  }
`;

const Room = ({room, image, index, active}) => (
  <RoomRoot>
    <RoomInfo>
      <RoomInfoHeader>
        <RoomTitle><FormattedMessage id={`${room.name}.title`} /></RoomTitle>
        <Meta img={pers}>
          {`${room.people} `}<FormattedMessage id="guests" />
        </Meta>
        <Meta img={bed}>
          {room.bed}
        </Meta>
        <RoomText><FormattedMessage id={`${room.name}.text`} /></RoomText>
      </RoomInfoHeader>
      <RoomAction>
        {/* <div className="Rooms__Price"> */}
          <RoomText>Pris</RoomText>
          <PriceText>{room.price}</PriceText>
        {/* </div> */}
        {/* <Button>Boka</Button> */}
      </RoomAction>
    </RoomInfo>
    <RoomImage>
      <Img fluid={image} />
    </RoomImage>
  </RoomRoot>
)

export default Room;

