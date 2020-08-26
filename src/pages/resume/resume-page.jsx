import React from 'react';

import './resume-page.styles.scss';

import LeftArea from  '../../component/left-area/left-area.component';
import ResumeUI from '../resume/resume-skills';

const ResumePage = () => (
      
<div className='resume-page'>
<LeftArea />
  <div className='title'>
    <h2>MY RESUME</h2>
    
  </div>
  <div className='body'>
  <h3>Education</h3>
      <p>
      2008-2013. Vinnytsia National Technical University.
Faculty of Information Technologies and Computer Engineering.
Specialty - computer systems and networks
      </p>
      <h3>Work Experience</h3>
      <p>
      Mar.2016 - Feb.2020 Regional organization Vinnytsia Information-analytical center as software engineer. Maintenance of computer systems and networks. Analyzed, and tested applications and system software for user compatibility. Installed, configured, and routinel upgraded software and hardware forend-users. Performed network support tasks for WAN, LAN. Repair and maintenance computer and peripheral equipment. Developed and maintained a web site of company.
      </p>
      <h3>Professional Skills</h3>
      <p>
      Knowledge of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI
Basic Knowledge of: PHP, MySql, Firebase
Understanding: NPM, Webpack, Gulp, Git, GitHub, Adobe Photoshop
Knowledge of CMS Wordpress, Joomla
Knowledge of English on the Pre-Intermediate level (Read/Write)
      </p>

  </div>
 
 
  <ResumeUI />
 </div>
      
);

export default ResumePage;