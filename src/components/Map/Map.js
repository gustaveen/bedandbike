import React from 'react';
import { FormattedMessage } from 'react-intl';
import map from '../../assets/images/map-pin.jpg';
// import bike from '../../assets/images/bike.png';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const MapRoot = styled.div`
  position: relative;
  background-color: #aadbff;
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const MapContainer = styled.div`
  display: flex;
  position: relative;
  max-width: calc(1220px + 8%);
  margin-left: auto;
  margin-right: auto;
  padding: 10% 4%;
`;

const MapInfo = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  text-align: center;
  background-color: white;

  @media ${breakpoints.ml} {
    /* position: absolute;
    top: 50%;
    right: 20%; */
    margin-right: unset;
    padding: 40px;
    /* transform: translateY(-50%); */
  }

  @media ${breakpoints.xl} {
    padding: 90px 50px;
  }
`;

// const MapIcon = styled.img`
//   display: inline-block;
//   margin-bottom: 20px;
// `;

const MapTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 2rem;
  font-weight: bold;

  @media ${breakpoints.ml} {
    font-size: 2.4rem;
  }
`;

const MapText = styled.p`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: ${props => props.theme.palette.gray.dark};
  @media ${breakpoints.ml} {
    margin-bottom: 30px;
  }
`;

const MapLink = styled.a`
  color: ${props => props.theme.palette.blue.main};
  font-size: 1.8rem;
`;

const Map = () => {
  return (
    <MapRoot>
      {/* <img src={map} alt="te" /> */}
      <MapContainer>
        <MapInfo>
          {/* <MapIcon src={bike} alt="logo" /> */}
          <MapTitle>
            <FormattedMessage id="mapTitle" />
          </MapTitle>
          <MapText>
            <FormattedMessage id="mapText" />
          </MapText>
          <MapLink
            href="https://goo.gl/maps/Beyf4Yn9HdjYM6GLA"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FormattedMessage id="mapLink" />
          </MapLink>
        </MapInfo>
      </MapContainer>
    </MapRoot>
  );
};

export default Map;
