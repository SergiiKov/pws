import React, { useState, useEffect }  from 'react';

import Table from './Table';
import personalData from '../../component/data/stats';
import img1 from '../../img/khb/1.jpg'; 
import img2 from '../../img/khb/2.jpg'; 
import img3 from '../../img/khb/3.jpg'; 
import img4 from '../../img/khb/4.jpg'; 

import './about-page.styles.scss'
import { queryAllByAltText } from '@testing-library/react';

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
      <div className="row-full">
        <div className="header-bg">
          <div className="col-1-of-2">
            <div className='about-page'>
              <div className='title--1'>
                  <h2 className='heading-secondary'>ABOUT THIS SITE</h2>
                  <h3 className='heading-tertiary' >A beautiful, responsive, React app written with modern JavaScript and React components.</h3>
              
                <div className='body'>
                  <p className='paragraph'>
                    Welcome to my website. Please read more about me, or you can check out my resume, my projects, or contact me.
                    This is react website created to introduce me and my skills in web development (and my skills in english).
                  </p>
                </div>
              </div>
            <div className='title--2'>
                <h2 className='heading-secondary'>ABOUT ME</h2>
                  <div className='body'>
                    <p className='paragraph'>
                      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, 
                      that wants to evolve in the field of web development. 
                      I want to try something new and ready to work hard to learn it.
                    </p>
                  </div>
            </div>
          </div>
        </div>
          <div className="col-1-of-2">
            <div className="">
              <div className="header">
                  <div className="header__text-box">
                      <h1 className="heading-primary">
                          <span className="heading-primary--main">Personal site</span>
                          <span className="heading-primary--sub">About me and my life</span>
                      </h1>
                  </div>
                  <Table data={Object.keys(data).map((key) => data[key])} />
                  <h4 className="header__heading">
                      <span className="header__heading-span header__heading-span--1">Kovtun Sergii</span>
                  </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="u-center-text u-margin-bottom-medium">
                    <h2 class="heading-secondary">
                    Some of my travels
                    </h2>
        </div>
<div className="row m-b-2">
  <div className="col-1-of-3">
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--1">
           &nbsp;
        </div>
         <h4 className="card__heading">
           <span className="card__heading-span card__heading-span--1">Summer travel</span>
          </h4>
           <div className="card__details">
                                    <ul>
                                        <li>29-30 08 2020</li>
                                        <li>Kamianets-Podilskyi</li>
                                        <li>Khotyn Fortress</li>
                                        <li>Bakota, Dniester</li>        
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
                       <div className="col-1-of-3">
                       <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--2">
        &nbsp;
        </div>
         <h4 className="card__heading">
           <span className="card__heading-span card__heading-span--2">Spring trip</span>
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
                           <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    {/* <div className="card__price-box">
                                        <p className="card__price-only">Photo</p>
                                        <p className="card__price-value">Travel</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a> */}
<div className="gallery">
{/* < img src={photoMy} alt="Sergii Kovtun"  className=''/> */}
  <figure class="gallery__item gallery__item--1">
    <img src={img1} alt="Gallery image 1" class="gallery__img" />
  </figure>
  <figure class="gallery__item gallery__item--2">
    <img src={img2} alt="Gallery image 1" class="gallery__img" />
  </figure>
  <figure class="gallery__item gallery__item--3">
    <img src={img3} alt="Gallery image 1" class="gallery__img" />
  </figure>
  <figure class="gallery__item gallery__item--4">
    <img src={img4} alt="Gallery image 1" class="gallery__img" />
  </figure>

  <figure class="gallery__item gallery__item--5">
    <img src={img1} alt="Gallery image 1" class="gallery__img" />
  </figure>
  <figure class="gallery__item gallery__item--6">
    <img src={img2} alt="Gallery image 1" class="gallery__img" />
  </figure>
  <figure class="gallery__item gallery__item--7">
    <img src={img3} alt="Gallery image 1" class="gallery__img" />
  </figure>
  <figure class="gallery__item gallery__item--8">
    <img src={img4} alt="Gallery image 1" class="gallery__img" />
  </figure>
</div>

                          
                           </div>

                            </div>
                       </div>
                       </div>
                       <div className="col-1-of-3">
                       <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--3">
           &nbsp;
        </div>
         <h4 className="card__heading">
           <span className="card__heading-span card__heading-span--3">Autumn Travel</span>
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
                           <div className="card__side card__side--back card__side--back-3">
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
