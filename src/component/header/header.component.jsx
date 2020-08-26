import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to='/'>
      <div className='logo'>Kovtun Sergii</div>
    </Link>
    <div className='options'>
      <Link className='option' to='/about'>
        About
      </Link>
      <Link className='option' to='/resume'>
        Resume
      </Link>
      <Link className='option' to='/projects'>
        Projects
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      </div> 
 </div>
      
);

export default Header;
