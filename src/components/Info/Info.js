import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

// import bike from '../../assets/svg/bike.svg'

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const InfoRoot = styled.div`
  padding: 30px 20px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;

  a {
    color: ${props => props.theme.palette.blue.main};
  }

  @media ${breakpoints.ml} {
    padding-top: 48px;
    padding-bottom: 48px;
    font-size: 2.4rem;
  }
`;

const Info = () => {
  return (
    <InfoRoot>
      <FormattedHTMLMessage id="contactText" />
    </InfoRoot>
  );
};

export default Info;
