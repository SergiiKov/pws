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
                    <span className="heading-primary--main">Personal site</span>
                    <span className="heading-primary--sub">About me and my life</span>
                </h1>
            </div>
            <h4 className="header__heading">
                <span className="header__heading-span header__heading-span--1">Kovtun Sergii</span>
            </h4>
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

 <div className="row">
                    <div className="col-1-of-3">
 <div className="card">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Photo</p>
                                        <p className="card__price-value">Travel</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>
    </React.Fragment>
  
 )
      
};

export default AboutPage;
