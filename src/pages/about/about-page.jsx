import React, { useState, useEffect }  from 'react';

import Table from './Table';
import personalData from '../../component/data/stats';
import khb_img1 from '../../img/khb/1.jpg'; 
import khb_img2 from '../../img/khb/2.jpg'; 
import khb_img3 from '../../img/khb/3.jpg'; 
import khb_img4 from '../../img/khb/4.jpg'; 
import khb_img5 from '../../img/khb/5.jpg'; 
import khb_img6 from '../../img/khb/6.jpg'; 

import vv_img1 from '../../img/vv/1.jpg'; 
import vv_img2 from '../../img/vv/2.jpg'; 
import vv_img3 from '../../img/vv/3.jpg'; 
import vv_img4 from '../../img/vv/4.jpg'; 
import vv_img5 from '../../img/vv/5.jpg'; 
import vv_img6 from '../../img/vv/6.jpg'; 

import karp_img1 from '../../img/karp/1.jpg'; 
import karp_img2 from '../../img/karp/2.jpg'; 
import karp_img3 from '../../img/karp/3.jpg'; 
import karp_img4 from '../../img/karp/4.jpg'; 
import karp_img5 from '../../img/karp/5.jpg'; 
import karp_img6 from '../../img/karp/6.jpg'; 

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
      <div className="row-full">
        <div className="header-bg">
          <div className="col-1-of-2">
            <div className='about-page'>
              <div className="border-title">
                <div className='title'>
                    <h2 className='heading-secondary'>ABOUT THIS SITE</h2>
                    <h3 className='heading-tertiary' >A beautiful, responsive, React app written with modern JavaScript and React components.</h3>
                  <div className='body'>
                    <p className='paragraph'>
                      Welcome to my website. Please read more about me, or you can check out my resume, my projects, or contact me.
                      This is react website created to introduce me and my skills in web development (and my skills in english).
                    </p>
                  </div>
                </div>
              </div>
          <div className="border-title">
            <div className='title'>
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
        </div>
          <div className="col-1-of-2">
            <div className="border-title">
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
           <span className="card__heading-span card__heading-span--1">Spring trip</span>
          </h4>
           <div className="card__details">
                                    <ul>
                                        <li>Vinnytsia region</li>
                                        <li>Pivdennyy Buh</li>
                                        <li>Villages near Vinnytsia</li>     
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-1">       
                           <div className="card__cta">
    <div className="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src={vv_img1} alt="Gallery image 1" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src={vv_img2} alt="Gallery image 2" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src={vv_img3} alt="Gallery image 3" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src={vv_img4} alt="Gallery image 4" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img src={vv_img5} alt="Gallery image 5" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src={vv_img6} alt="Gallery image 6" class="gallery__img" />
        </figure>
    </div>             
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
           <span className="card__heading-span card__heading-span--2">Summer travel</span>
          </h4>
           <div className="card__details">
                                    <ul>
                                        <li>Kamianets-Podilskyi</li>
                                        <li>Khotyn Fortress</li>
                                        <li>Bakota, Dniester</li>     
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
    <div className="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src={khb_img1} alt="Gallery image 1" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src={khb_img2} alt="Gallery image 2" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src={khb_img3} alt="Gallery image 3" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src={khb_img4} alt="Gallery image 4" class="gallery__img" />
        </figure>

        <figure class="gallery__item gallery__item--5">
          <img src={khb_img5} alt="Gallery image 5" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src={khb_img6} alt="Gallery image 6" class="gallery__img" />
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
                                        <li>Karpaty</li>
                                        <li>Dzembronya, Pip Ivan</li>
                                        <li>Yaremche, Hoverla</li>
                                        <li>Ivano-Frankivsk</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                <div className="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src={karp_img1} alt="Gallery image 1" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src={karp_img2} alt="Gallery image 2" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src={karp_img3} alt="Gallery image 3" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src={karp_img4} alt="Gallery image 4" class="gallery__img" />
        </figure>

        <figure class="gallery__item gallery__item--5">
          <img src={karp_img5} alt="Gallery image 5" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src={karp_img6} alt="Gallery image 6" class="gallery__img" />
        </figure>
    </div>     
                                </div>
                            </div>
                       </div>
                       </div>

                  
                 </div>
    </React.Fragment>
  
 )
      
};

export default AboutPage;
