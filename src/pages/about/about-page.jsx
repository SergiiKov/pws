import React, { useState, useEffect }  from 'react';
import { useSpring, animated } from 'react-spring'

import Table from '../../component/table/Table';
import personalData from '../../component/data/stats';
import Card from '../../component/card/card-component';
import CardSpring from '../../component/spring/card/card';
import CardSpring2 from '../../component/spring/card/card2';
import { render } from 'react-dom';

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 80, (x - window.innerWidth / 2) / 60, 1]
// const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AboutPage = () => {

  const [flipped, set1] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

 
  const [data, setData] = useState(personalData);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20 } }))
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
                 
                  {/* <animated.div
                      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                      onMouseLeave={() => set({ xys: [0, 0, 1] })}
                      style={{ transform: props.xys.interpolate(trans) }}>
                  <h4 className="header__heading">
                      <span className="header__heading-span header__heading-span--1">Kovtun Sergii</span>
                  </h4>
                  </animated.div> */}

                  <div onClick={() => set1(state => !state)}>
                      <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                      <h4 className="header__heading">
                          <span className="header__heading-span header__heading-span--1">Kovtun Sergii</span>
                      </h4>
                      </animated.div>
                      <animated.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                      <h4 className="header__heading">
                                          <span className="header__heading-span header__heading-span--1">Hello!</span>
                                      </h4>
                      </animated.div>
                  </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-2">
            <div className="border-card-title">
              <CardSpring />
            </div>
            <div className="border-card-title">
              <CardSpring2 />

            </div>
        </div>
        </div>
      </div> 
</div>

    {/* <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
      <h2 className="heading-secondary">
        Some of my travels
      </h2>
    </div>
  <Card /> */}
</React.Fragment>
 )
      
};

export default AboutPage;
