import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/slide';

import Button from '../button/button.component';

import routes from '../data/routes';

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
      <Menu right isOpen={open} >
        <div className='drawer-container'>
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label} className="hamburger-li">
              <Link className='nav__link' to={l.path} onClick={() => setOpen(!open)}>
                <h3 className={l.index && 'index-li'}>{l.label}</h3>
              </Link>
            </li>
          ))}
        </ul>
    <Button />
        </div>
      </Menu>
    </div>
  );
};

export default Hamburger;
