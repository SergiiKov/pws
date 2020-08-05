import React from 'react';

import photoMy from '../../img/MyPhoto.jpg'; 

import './left-area.styles.scss'


const LeftArea = () => (
  <div className='left-area'>
    <div>
      < img src={photoMy} alt="Sergii Kovtun"  className='photoContainer'/>
    </div>
      <h3>Kovtun Sergii</h3>
      <p>sergiikovtun.vn@gmail.com</p> 
      <p>About</p>  
      <p>Hi, I'm Kovtun Sergii</p> 
 </div>
      
);

export default LeftArea;