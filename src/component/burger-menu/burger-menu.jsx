import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'react-burger-menu/lib/menus/slide';

import './burger-menu.scss'

import logo from '../../img/logo.png';


const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Menu right isOpen={open}>
    <Link  onClick={() => setOpen(!open)}>     
        <Link className='nav__link' to='/about'>
            About
        </Link>
        <Link className='nav__link' to='/resume'>
        Resume
      </Link>
      <Link className='nav__link' to='/projects'>
        Projects
      </Link>
      <Link className='nav__link' to='/contact'>
        Contact
      </Link>
    </Link>

      </Menu>
    </div>
  );
};

export default Hamburger;
