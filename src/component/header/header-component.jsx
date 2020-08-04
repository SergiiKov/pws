import React from 'react';
import { Link } from 'react-router-dom';


import './header-styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
     
      <div className='logo'>Kovtun Sergii</div>
    </Link>
    <div className='options'>
      <Link className='option' to='/resume'>
        Resume
      </Link>
      </div> 
 </div>
      
);

export default Header;
