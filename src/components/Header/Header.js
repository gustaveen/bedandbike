import React from 'react'
// import { Link } from '../i18n'
import Language from '../Language'
// import Link from 'gatsby-link'

// import NavMain from '../NavMain';


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