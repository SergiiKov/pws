import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/t.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header_nav'>
    <Link to='/'>
      <div className='logo'><img src={logo} alt="Logo" /></div>
    </Link>
    <div className='nav'>
    <div className="nav__item">
      <Link className='nav__link' to='/about'>
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
