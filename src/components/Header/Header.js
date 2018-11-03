import React from 'react'
import Language from '../Language'


import logo from '../../assets/svg/logo.svg'
import {
  HeaderRoot,
  HeaderContainer,
  } from './Header.styles';

const Header = (props) => (
  
  <HeaderRoot>
    <HeaderContainer>
      <a href={`/`} className="Header__Logo">
        <span className="sr-only">Bed and Bike Öckerö</span>
        <img 
          src={logo}
          alt="logo"
        />
      </a>
      <Language />
    </HeaderContainer>
  </HeaderRoot>   
)

export default Header;