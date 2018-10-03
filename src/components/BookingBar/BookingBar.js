import React from 'react'
// import Link from 'gatsby-link'
// import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const BookingBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4%;
  margin-right: 4%;
  padding-top: 24px;
  padding-bottom: 24px;

  @media ${breakpoints.md} {  
  padding-top: 32px;
  padding-bottom: 32px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Button = styled.a`
  padding: 19px 35px;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: #0F69D0;
  text-decoration: none;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);

  &:hover {
  background-color: #0F69D0;
  }
`;

const BookingBar = () => (
  <BookingBarContainer>
    <Title>
      Boka din vistelse redan idag
      {/* <FormattedMessage id="bookingBarTitle" /> */}
    </Title>
    <Button
      href="#"
    >
      Boka rum  
    </Button>
  </BookingBarContainer>

)

export default BookingBar;