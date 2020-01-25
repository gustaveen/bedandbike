import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

import clean from '../../assets/svg/clean.svg';
import bathtub from '../../assets/svg/bathtub.svg';
import key from '../../assets/svg/key.svg';
import cup from '../../assets/svg/cup.svg';
import towel from '../../assets/svg/towel.svg';
import washing from '../../assets/svg/washing.svg';
import wifi from '../../assets/svg/wifi.svg';

import {
  AmenitiesRoot,
  AmenitiesContainer,
  Content,
  List,
  Item,
  Text,
  Title,
} from './Amenities.styles';

const Amenities = props => (
  <AmenitiesRoot>
    <AmenitiesContainer>
      <Content>
        <Title>
          <FormattedMessage id="amenitiesTitle" />
        </Title>
        <Text>
          <FormattedMessage id="amenitiesPreamlbe" />
        </Text>
        <br/>
        <Text>
          <FormattedMessage id="amenitiesExtra" />
        </Text>
      </Content>
      <List>
        <Title>
          <FormattedMessage id="facilitiesByline" />
        </Title>
        <ul>
          <Item img={cup}>
            <FormattedMessage id="breakfast" />
          </Item>
          <Item img={washing}>
            <FormattedMessage id="laundry" />
          </Item>
          <Item img={towel}>
            <FormattedMessage id="linen" />
          </Item>
          <Item img={bathtub}>
            <FormattedMessage id="wc" />
          </Item>
          <Item img={wifi}>
            <FormattedMessage id="wifi" />
          </Item>
          <Item img={key}>
            <FormattedMessage id="storage" />
          </Item>
          <Item img={clean}>
            <FormattedMessage id="cleaning" />
          </Item>
        </ul>
      </List>
    </AmenitiesContainer>
  </AmenitiesRoot>
);

export default Amenities;
