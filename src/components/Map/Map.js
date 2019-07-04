import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import map from '../../assets/images/map_crop.jpg';
// import bike from '../../assets/images/bike.png';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const MapRoot = styled.div`
  background-color: #f9f9f9;
`;

const MapContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  @media ${breakpoints.ml} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media ${breakpoints.xl} {
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

const MapIcon = styled.img`
  display: inline-block;
  margin-bottom: 20px;
`;

const MapText = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${breakpoints.md} {
    font-size: 2rem;
  }

  @media ${breakpoints.ml} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lg} {
    font-size: 2.6rem;
  }
`;

const Map = ({ text }) => {
  return (
    <MapRoot>
      <img src={map} alt="te" />
      <MapContainer>
        {/* <MapIcon src={bike} alt="logo" /> */}
        <MapText>{text}</MapText>
      </MapContainer>
    </MapRoot>
  );
};

export default Map;
