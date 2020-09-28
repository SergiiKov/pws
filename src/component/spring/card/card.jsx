import React from 'react'
import { useSpring, animated } from 'react-spring'

import './style.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 40, 1.05]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default  function CardSpring() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20 } }))
  return (
      <React.Fragment>
    <animated.div class="card_spring"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
                 
                    <h2 className='heading-secondary'>ABOUT THIS SITE</h2>
                    <h3 className='heading-tertiary' >A beautiful, responsive, React app written with modern JavaScript and React components.</h3>
                  <div className='body'>
                    <p className='paragraph'>
                      Welcome to my website. Please read more about me, or you can check out my resume, my projects, or contact me.
                      This is react website created to introduce me and my skills in web development (and my skills in english).
                    </p>
                  </div>
              
      </animated.div>
      </React.Fragment>

  )
}


