import React from 'react';

import photoMy from '../../img/MyPhoto.jpg'; 
import cvUa from '../../img/cv_ua.pdf'
import cvEn from '../../img/cv_en.pdf'

import './left-area.styles.scss'


const LeftArea = () => (
  <div className='left-area'>
    <div>
      < img src={photoMy} alt="Sergii Kovtun"  className='photoContainer'/>
    </div>
      <h3 className='paragraph'>Kovtun Sergii</h3>
      <p className='style__link'>sergiikovtun.vn@gmail.com</p> 
      <p className='paragraph'> About</p>  
      <p className='paragraph'>Hi, I'm Kovtun Sergii</p> 
      <div href={cvEn} target="_blank">resume</div>
      <div href={cvUa} target="_blank" >резюме</div>
 </div>
      
);

export default LeftArea;