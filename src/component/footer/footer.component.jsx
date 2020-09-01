import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';

import './footer.styles.scss'


const Footer = () => (
    <footer className="footer">
         <div className="row">

        <div className="col-1-of-3">
            <div className="footer__navigation">
                <div className="footer__list">
                    <Link className='footer__link' to='/about'>
                        About
                    </Link>
                   
                 
                    <Link className='footer__link' to='/resume'>
                        Resume
                    </Link>
                
                  
                    <Link className='footer__link' to='/projects'>
                        Projects
                    </Link>
                
                 
                    <Link className='footer__link' to='/contact'>
                        Contact
                    </Link>

                </div>

                {/* <ul class="footer__list">
                    <li class="footer__item"><a href="#" class="footer__link">About</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Resume</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Projects</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Contact</a></li>
                </ul> */}
            </div>
        </div>
        <div className="col-1-of-3">
    <div className="footer__logo-box">
    <img src={logo} alt="Logo" className="footer__logo" />
    </div>
</div>
        <div className="col-1-of-3">
            <p className="footer__copyright">
                Built by <a href="#" className="footer__link">Kovtun Sergii</a> for his online course <a href="#" className="footer__link">for test</a>.
                Copyright &copy; by Kovtun Sergii.
            </p>
        </div>
    </div>
</footer>
      
);

export default Footer;