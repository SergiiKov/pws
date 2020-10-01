import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Hamburger from "../burger-menu/burger-menu";

import logo from '../../img/logo.png';


export default function Header(checked1, onChange1) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
  const tabs = (
    <React.Fragment>
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
    </React.Fragment>
  )

  return(
   <React.Fragment>
      <div className='header_nav'>
        <div className="logo-container">
          <Link to='/'>
        <div ><img src={logo} className='logo' alt="Logo" /></div>
          </Link>
        </div>
        { matches ? <Hamburger /> : tabs}
      </div>
   </React.Fragment>
  );
}

