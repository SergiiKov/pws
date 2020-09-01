import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss'


const Footer = () => (
    <footer class="footer">
    <div class="footer__logo-box">

        {/* <picture class="footer__logo">
            <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                    media="(max-width: 37.5em)">
            <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png">
        </picture> */}

    </div>
    <div class="row">
        <div class="col-1-of-2">
            <div class="footer__navigation">
                <div class="footer__list">
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
        <div class="col-1-of-2">
            <p class="footer__copyright">
                Built by <a href="#" class="footer__link">Kovtun Sergii</a> for his online course <a href="#" class="footer__link">for test</a>.
                Copyright &copy; by Kovtun Sergii.
            </p>
        </div>
    </div>
</footer>
      
);

export default Footer;