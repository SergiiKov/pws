import React from 'react';

import './resume-page.styles.scss';

import LeftArea from  '../../component/left-area/left-area.component';
import ResumeUI from '../resume/resume-skills';

const ResumePage = () => (
    

   
<div className='resume-page'>
<div className="test11">
<div className="row-full">

      <div className="col-1-of-3">
      <LeftArea />
      </div>
<div className="col-2-of-3">
  <div className='title'>
    <h2 className='heading-secondary'>MY RESUME</h2>
  </div>

  <div className='resume-block resume-margin'>
  <h3 className='heading-tertiary'>Education</h3>
      <p className='paragraph'>
      2008-2013. Vinnytsia National Technical University.
      Faculty of Information Technologies and Computer Engineering.
      Specialty - computer systems and networks</p>
      </div>
      <div className="resume-block resume-margin">
      <h3 className='heading-tertiary'>Work Experience</h3>
      <p className='paragraph'>Mar.2016 - Feb.2020 Regional organization Vinnytsia Information-analytical center as software engineer. Maintenance of computer systems and networks.
       Analyzed, and tested applications and system software for user compatibility.
        Installed, configured, and routinel upgraded software and hardware forend-users.
         Performed network support tasks for WAN, LAN. Repair and maintenance computer and peripheral equipment.
       Developed and maintained a web site of company.</p>
      </div>

      <div className="resume-block resume-margin">
      <h3 className='heading-tertiary'>Professional Skills</h3>
      <ul className='list'>
        <li className='list-li'>Knowledge of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI</li>
        <li className='list-li'>Basic Knowledge of: PHP, MySql, Firebase</li>
        <li className='list-li'>Understanding: NPM, Webpack, Gulp, Git, GitHub, Adobe Photoshop</li>
        <li className='list-li'>Basic Knowledge of CMS Wordpress, Joomla</li>
        <li>Knowledge of English on the Pre-Intermediate level (Read/Write)</li>
      </ul>
      </div>
 
  <ResumeUI />
      </div>
 </div>
 </div>
 </div>    
);

export default ResumePage;