import React from 'react';

import './about-page.styles.scss'

const AboutPage = () => (
<div className='about-page'>
  <div className='title'>
    <h2>ABOUT THIS SITE</h2>
    <h3>A beautiful, responsive, React app written with modern JavaScript and React components.</h3>
  </div>
  <div className='body'>
      <p>
        Welcome to my website. Please read more about me, or you can check out my resume, my projects, or contact me.
        This is react website created to introduce me and my skills in web development (and my skills in english).
      </p>
  </div>
 
  <div className='title'>
    <h2>ABOUT ME</h2>
  </div>
  <div className='body'>
    <p>
      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, 
      that wants to evolve in the field of web development. 
      I want to try something new and ready to work hard to learn it.
    </p>
  </div>

 </div>
      
);

export default AboutPage;
