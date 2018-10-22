import React from 'react'
// import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

import Button from '../Button'

import room1Img from '../../assets/images/rum-1.jpg'
import room2Img from '../../assets/images/rum-2.jpg'
import room3Img from '../../assets/images/rum-3.jpg'
import room4Img from '../../assets/images/rum-4.jpg'
import pers from '../../assets/svg/person.svg'
import bed from '../../assets/svg/bed.svg'

const RoomRoot = styled.div`
  display: flex;
  background: ${props => props.theme.palette.gray.main};
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 40%;
  padding 54px 38px 38px;
`;

const RoomInfoHeader = styled.div`
  flex-grow: 1;
`;

const RoomTitle = styled.p`
  margin-bottom: 8px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const RoomAction = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.palette.gray.main}; 

  @media ${breakpoints.md} {
      padding-top: 32px;
  }
`;

const RoomImage = styled.div`
  position: relative;
  width: 60%;

  img {
      width: 100%;
      height: 100%;;
      object-fit: cover;
  }
`;

const RoomText = styled.p`
  font-size: 1.8rem;
  line-height: 1.33;
  color: ${props => props.theme.palette.gray.dark};
`;

const PriceText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.2;
`;

const Meta = styled.span`
  display: inline-block;
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


class Rooms extends React.PureComponent {
  state = {
    index: 1
  }

  clickHandler = (e) => {
    e.preventDefault();
  }

  getInitialValues = () => {

    const defaultValues = [
      {
        name: 'room1',
        people: '2-3',
        bed: '2 x 90 cm',
        price: '950 kr',
        img: room1Img,
      },
      {
        name: 'room2',
        people: '2',
        bed: '2 x 90 cm',
        price: '950 kr',
        img: room2Img,
      },
      {
        name: 'room3',
        people: '2',
        bed: '2 x 90 cm',
        price: '950 kr',
        img: room3Img,
      },
      {
        name: 'room4',
        people: '1',
        bed: '1 x 120 cm',
        price: '500 kr',
        img: room4Img,
       }
    ];

    return defaultValues;
  }

  render() {
    const rooms = this.getInitialValues();
    const rum = 'room1';

    return (
      <section className="Rooms">
        <div className="Rooms__Container">
          <div className="Rooms__Header">
            <h2 className="Rooms__Title">
              <FormattedMessage id="room" />
        </h2>
  </div>
  <div className="Rooms__Menu">
  <a href="" className="Rooms__Link Rooms__Link--Active"><FormattedMessage id={`${rum}.title`} /></a>
  <a href="" className="Rooms__Link"><FormattedMessage id="room2.title" /></a>
  <a href="" className="Rooms__Link"><FormattedMessage id="room3.title" /></a>
  <a href="" className="Rooms__Link"><FormattedMessage id="room4.title" /></a>
  </div>
  <div className="Rooms__Content">
  {rooms.map((room, index) =>
    <Room
        key={index}
        room={room}
        index={index}
        active={this.state}
    />
  )}
  </div>
  </div>
  </section>
  );
  }
}

const Room = ({room, index, active}) => {

  return (
  <RoomRoot>
    <RoomInfo>
      <RoomInfoHeader>
        <RoomTitle><FormattedMessage id={`${room.name}.title`} /></RoomTitle>
        <Meta img={pers}>
          {room.people}<FormattedMessage id="guests" />
        </Meta>
        <Meta img={bed}>
          {room.bed}
        </Meta>
        <RoomText><FormattedMessage id={`${room.name}.text`} /></RoomText>
      </RoomInfoHeader>
      <RoomAction>
        <div className="Rooms__Price">
          <RoomText>Pris</RoomText>
          <PriceText>{room.price}</PriceText>
        </div>
        <Button>Boka</Button>
      </RoomAction>
    </RoomInfo>
    <RoomImage>
      <img src={room.img} alt=""/>
    </RoomImage>
  </RoomRoot>
  );
};


export default Rooms;

