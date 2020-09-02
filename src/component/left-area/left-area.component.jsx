import React from 'react';

// import Button from '../button/button.component';
import photoMy from '../../img/MyPhoto.jpg'; 
import cvUa from '../../img/cv_ua.pdf';
import cvEn from '../../img/cv_en.pdf';

import './left-area.styles.scss'

const LeftArea = () => (
  <div className='left-area'>
     <div className="test">

  
    <div className='left-img-container'>
      < img src={photoMy} alt="Sergii Kovtun"  className='left-img'/>
      <figcaption className="left-img-name">Kovtun Sergii</figcaption>
    </div>
  

    <div className="text-container">
      <h3 className='heading-tertiary'>Kovtun Sergii</h3>
      <p className='style__link'>sergiikovtun.vn@gmail.com</p> 
      <p className='heading-tertiary'> About</p>  
      <p className='paragraph'>Hi, I'm Kovtun Sergii</p> 
    </div>
 

      <div className="button-container">
        <div href={cvEn} target="_blank" className='button'>resume</div>
        <div href={cvUa} target="_blank" className='button'>резюме</div>
      </div>

    
 </div>
 </div>   
);

export default LeftArea;