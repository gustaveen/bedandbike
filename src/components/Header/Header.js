import React from 'react';
import Language from '../Language';
import NavMain from '../NavMain';

import logo from '../../assets/svg/logo.svg';
import { HeaderRoot, HeaderContainer } from './Header.styles';

const Header = props => (
  <HeaderRoot>
    <HeaderContainer>
      <a href={`/`} className="Header__Logo">
        <span className="sr-only">Bed and Bike Öckerö</span>
        <img src={logo} alt="logo" />
      </a>
      <NavMain />
      <Language />
    </HeaderContainer>
  </HeaderRoot>
);

export default Header;
