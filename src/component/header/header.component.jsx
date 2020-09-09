import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

import './header.styles.scss';

const Header = () => (
  <div className='header_nav'>
    <div className="logo-container">
    <Link to='/'>
      <div ><img src={logo} className='logo' alt="Logo" /></div>
    </Link>

    </div>

    <div className='nav'>
    <div className="nav__item">
      <Link className='nav__link' to='/'>
        About
      </Link>
      </div>
      <div className="nav__item">
      <Link className='nav__link' to='/resume'>
        Resume
      </Link>
      </div>
      <div className="nav__item">
      <Link className='nav__link' to='/projects'>
        Projects
      </Link>
      </div>
      <div className='nav__item'>
      <Link className='nav__link' to='/contact'>
        Contact
      </Link>
      </div>

      </div> 
 </div>
      
);

export default Header;
