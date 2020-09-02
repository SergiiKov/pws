import React from 'react';

// import Button from '../button/button.component';
import photoMy from '../../img/MyPhoto.jpg'; 
import cvUa from '../../img/cv_ua.pdf';
import cvEn from '../../img/cv_en.pdf';

import './left-area.styles.scss'
import facebook from '../../img/facebook2.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';
import envelop from '../../img/envelop.svg';

const LeftArea = () => (
  <div className='left-area'>
     <div className="bg-container">
    <div className='left-img-container'>
      < img src={photoMy} alt="Sergii Kovtun"  className='left-img'/>
      <figcaption className="left-img-name">Kovtun Sergii</figcaption>
    </div>
  
    <div className="text-container">
      <h3 className='heading-tertiary'>Hi, I'm Kovtun Sergii!</h3>
      <a className='style-mail__link' href="mailto:sergiikovtun.vn@gmail.com">My Email: sergiikovtun.vn@gmail.com</a>
      <p className='paragraph'>Download or read my resume</p> 
    </div>
 
      <div className="button-container">
        <div><a className='button' href={cvEn} target="_blank">resume</a></div>
        <div><a className='button' href={cvUa} target="_blank">резюме</a></div>
      </div>

      <div className="text-container">
        <p className='paragraph'>Social</p> 
      </div>
      <div className="button-container">
        <div  className=''>
          <a href='https://github.com/SergiiKov' target="_blank">
            <img src={github} alt="mail" className="icon"/>
          </a>
        </div>
        <div className=''>
          <a href='https://www.linkedin.com/in/sergii-kovtun-1b97881a2/' target="_blank">
          <img src={linkedin} alt="mail" className="icon"/>
          </a>
    
        </div>
        <div className=''>
          <a href='https://www.facebook.com/profile.php?id=100017264941501' target="_blank">
          <img src={facebook} alt="mail" className="icon"/>
          </a>
        </div>
      <div className=''>
        <a href="mailto:sergiikovtun.vn@gmail.com" target="_blank">
        <img src={envelop} alt="mail" className="icon"/>
        </a>
      </div>
      </div>
  
 </div>
 </div>   
);

export default LeftArea;