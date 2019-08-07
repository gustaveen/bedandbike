import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

// import Button from '../Button'
import Room from './Room';

import room1Img from '../../assets/images/rum-1.jpg';
import room2Img from '../../assets/images/rum-2.jpg';
import room3Img from '../../assets/images/rum-3.jpg';
import room4Img from '../../assets/images/rum-4.jpg';
import pers from '../../assets/svg/person.svg';
import bed from '../../assets/svg/bed.svg';

const RoomsRoot = styled.div`
  max-width: calc(1220px + 8%);
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 720px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const RoomsContainer = styled.div`
  margin-left: 4%;
  margin-right: 4%;
`;

const RoomsHeader = styled.div`
  margin-bottom: 24px;
`;

const RoomsTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

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
  padding 24px 24px 32px;

  @media ${breakpoints.ml} {  
    width: 40%;
    padding 54px 38px 38px;
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
  border-top: 1px solid #e1e1e1;

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
    height: 100%;
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

class Rooms extends React.PureComponent {
  state = {
    index: 1,
  };

  clickHandler = e => {
    e.preventDefault();
  };

  getInitialValues = () => {
    const defaultValues = [
      {
        name: 'room1',
        people: '2-3',
        bed: '2 x 90 cm',
        price: '1050 kr',
        img: room1Img,
        test: '/rum-1.jpg/',
      },
      {
        name: 'room2',
        people: '2',
        bed: '2 x 90 cm',
        price: '1050 kr',
        img: room2Img,
        test: '/rum-1.jpg/',
      },
      {
        name: 'room3',
        people: '2',
        bed: '2 x 90 cm',
        price: '1050 kr',
        img: room3Img,
        test: '/rum-1.jpg/',
      },
      {
        name: 'room4',
        people: '1',
        bed: '1 x 105 cm',
        price: '500 kr',
        img: room4Img,
        test: '/rum-1.jpg/',
      },
    ];

    return defaultValues;
  };

  render() {
    const rooms = this.getInitialValues();
    const rum = 'room1';
    const { images } = this.props;
    return (
      <RoomsRoot>
        <RoomsContainer>
          <RoomsHeader>
            <RoomsTitle>
              <FormattedMessage id="room" />
            </RoomsTitle>
          </RoomsHeader>
          {/* <div className="Rooms__Menu">
            <a href="" className="Rooms__Link Rooms__Link--Active"><FormattedMessage id={`${rum}.title`} /></a>
            <a href="" className="Rooms__Link"><FormattedMessage id="room2.title" /></a>
            <a href="" className="Rooms__Link"><FormattedMessage id="room3.title" /></a>
            <a href="" className="Rooms__Link"><FormattedMessage id="room4.title" /></a>
          </div> */}
          <div className="Rooms__Content">
            {rooms.map((room, index) => (
              <Room
                key={index}
                room={room}
                image={images[index]}
                index={index}
                active={this.state}
              />
            ))}
          </div>
        </RoomsContainer>
      </RoomsRoot>
    );
  }
}

export default Rooms;
