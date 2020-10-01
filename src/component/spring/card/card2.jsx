import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 30, 1.04]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default  function CardSpring2() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20 } }))
  return (
      <React.Fragment>
    <animated.div class="card_spring"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
                 
                 <h2 className='heading-secondary'>ABOUT ME</h2>
                  <div className='body'>
                    <p className='paragraph'>
                      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, 
                      that wants to evolve in the field of web development. 
                      I want to try something new and ready to work hard to learn it.
                    </p>
                  </div> 
      </animated.div>
      </React.Fragment>

  )
}


