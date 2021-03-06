import React from 'react';

import photoMy from '../../img/MyPhoto.jpg'; 
import cvUa from '../../img/cv_ua.pdf';
import cvEn from '../../img/cv_en.pdf';

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
        <h3 className='heading-tertiary-left'>Hi! I'm Kovtun Sergii</h3>
        <a className='style-mail__link' href="mailto:sergiikovtun.vn@gmail.com">My Email: sergiikovtun.vn@gmail.com</a>
        <p className='paragraph-left'>Download or read my resume</p> 
      </div>
  
        <div className="button-container">
          <div><a className='button-left' href={cvEn} target="_blank" rel="noopener noreferrer">resume</a></div>
          <div><a className='button-left' href={cvUa} target="_blank" rel="noopener noreferrer">резюме</a></div>
        </div>

        <div className="text-container">
          <p className='paragraph-left'>Social</p> 
        </div>
        <div className="button-container">
          <div>
            <a href='https://github.com/SergiiKov'target="_blank" rel="noopener noreferrer">
              <img src={github} alt="mail" className="icon"/>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/sergii-kovtun-1b97881a2/' target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="mail" className="icon"/>
            </a>
      
          </div>
          <div>
            <a href='https://www.facebook.com/profile.php?id=100017264941501' target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="mail" className="icon"/>
            </a>
          </div>
        <div>
          <a href="mailto:sergiikovtun.vn@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={envelop} alt="mail" className="icon"/>
          </a>
        </div>
        </div>
  </div>
 </div>   
);

export default LeftArea;