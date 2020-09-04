import React from 'react';

import LeftArea from  '../../component/left-area/left-area.component';

import './contact-page.styles.scss'

const ContactPage = () => (
<div className="contact-page">
  <div className="row-full">
    <div className="col-1-of-3">
      <LeftArea />
    </div>
    <div className="col-2-of-3">
    <div className='title u-margin-bottom-small'>
    <h2 className='heading-secondary'>MY CONTACT</h2>
  </div>
      <div className="form__group">
        <input type="text" className="form__input" placeholder="Name" id="name" required />
        <label for="name" className="form__label">Full name</label>
      </div>  
      <div class="form__group">
        <input type="email" class="form__input" placeholder="Email address" id="email" required />
        <label for="email" class="form__label">Email address</label>
      </div>
      <div className="form__group">
        <input type="text" className="form__input" placeholder="Phone" id="phone" required />
        <label for="phone" className="form__label">Phone</label>
      </div>  
      <div class="form__group">
        <button class="btn btn--green">Send Message</button>
      </div>
    </div>
  </div>
</div>
  
);

export default ContactPage;