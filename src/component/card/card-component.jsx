import React from 'react';

import './card-component.styles.scss'

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

const Card = () => {
 
  return (
    <React.Fragment>

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
          <img src={vv_img1} alt="Gallery Vinnytsia" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src={vv_img2} alt="Gallery Vinnytsia" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src={vv_img3} alt="Gallery Vinnytsia" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src={vv_img4} alt="Gallery Vinnytsia" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img src={vv_img5} alt="Gallery Vinnytsia" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src={vv_img6} alt="Gallery Vinnytsia" class="gallery__img" />
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
          <img src={khb_img1} alt="Gallery Summer travel" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src={khb_img2} alt="Gallery Summer travel" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src={khb_img3} alt="Gallery Summer travel" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src={khb_img4} alt="Gallery Summer travel" class="gallery__img" />
        </figure>

        <figure class="gallery__item gallery__item--5">
          <img src={khb_img5} alt="Gallery Summer travel" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src={khb_img6} alt="Gallery Summer travel" class="gallery__img" />
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
                    <img src={karp_img1} alt="Gallery Karpaty" class="gallery__img" />
                    </figure>
                    <figure class="gallery__item gallery__item--2">
                    <img src={karp_img2} alt="Gallery Karpaty" class="gallery__img" />
                    </figure>
                    <figure class="gallery__item gallery__item--3">
                    <img src={karp_img3} alt="Gallery Karpaty" class="gallery__img" />
                    </figure>
                    <figure class="gallery__item gallery__item--4">
                    <img src={karp_img4} alt="Gallery Karpaty" class="gallery__img" />
                    </figure>
                    <figure class="gallery__item gallery__item--5">
                    <img src={karp_img5} alt="Gallery Karpaty" class="gallery__img" />
                    </figure>
                    <figure class="gallery__item gallery__item--6">
                    <img src={karp_img6} alt="Gallery Karpaty" class="gallery__img" />
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

export default Card;
