import React, { useState, useEffect }  from 'react';

import Table from '../../component/table/Table';
import personalData from '../../component/data/stats';
import Card from '../../component/card/card-component';
import CardSpring from '../../component/spring/card/card';
import CardSpring2 from '../../component/spring/card/card2';

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
       <div className='about-page'>
      <div className="row-full">
        <div className="header-bg">

        <div className="col-1-of-2">
            <div className="border-title">
              <div className="header">
                  <div className="header__text-box">
                      <h1 className="heading-primary">
                          <span className="heading-primary--main">Personal site</span>
                          <span className="heading-primary--sub">About me and My life</span>
                      </h1>
                  </div>
                  <Table data={Object.keys(data).map((key) => data[key])} />
                  <h4 className="header__heading">
                      <span className="header__heading-span header__heading-span--1">Kovtun Sergii</span>
                  </h4>
              </div>
            </div>
          </div>

          <div className="col-1-of-2">
            <div className="border-title">
              <CardSpring />
            </div>
            <div className="border-title">
              <CardSpring2 />

            </div>
        </div>
        </div>
      </div> 
</div>
    <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
      <h2 className="heading-secondary">
        Some of my travels
      </h2>
    </div>
  <Card />
</React.Fragment>
 )
      
};

export default AboutPage;
