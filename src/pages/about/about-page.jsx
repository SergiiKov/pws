import React, { useState, useEffect }  from 'react';

import Table from './Table';
import personalData from '../../component/data/stats';

import './about-page.styles.scss'

const AboutPage = () => {
 
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2425;
    const birthTime = new Date('1990, 10, 13');
    setData({
      ...data,
      age: {
        label: 'Current age',
        value: ((Date.now() - birthTime) / divisor).toFixed(11),
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <React.Fragment>
              <div className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
            </div>
        </div>

        <div className='about-page'>
    <div className='title'>
      <h2 className='heading-secondary'>ABOUT THIS SITE</h2>
      <h3 className='heading-tertiary' >A beautiful, responsive, React app written with modern JavaScript and React components.</h3>
    </div>
  <div className='body'>
      <p className='paragraph'>
        Welcome to my website. Please read more about me, or you can check out my resume, my projects, or contact me.
        This is react website created to introduce me and my skills in web development (and my skills in english).
      </p>
  </div>
 
  <div className='title'>
    <h2 className='heading-secondary'>ABOUT ME</h2>
  </div>
  <div className='body'>
    <p className='paragraph'>
      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, 
      that wants to evolve in the field of web development. 
      I want to try something new and ready to work hard to learn it.
    </p>
  </div>
  <Table data={Object.keys(data).map((key) => data[key])} />
 </div>
    </React.Fragment>
  
 )
      
};

export default AboutPage;
