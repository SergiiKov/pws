import React, { useState, useEffect, useRef }  from 'react';
import {Spring, Transition} from 'react-spring/renderprops';
import {useSpring, animated as a} from 'react-spring';


const TestPage = () => {
    // const[isVisible, sertIsVisible]= useState(false);
    // const myRef = useRef(null);

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
  
 
  return (
    <React.Fragment>
{/* <button className='button-test' onClick={()=> sertIsVisible(!isVisible)}>Test</button>
<Spring
immediate={!myRef.current}
reset={true}
  from={{ opacity: 0, transform:'translateY(-4rem)' }}
  to={{ opacity: 1, transform:'translateY(0)'  }}
  config={{duration: 2000}}
  reverse={isVisible}>
  {props => <div ref={myRef} className='test' style={props}>hello</div>}
</Spring>

<Transition
  items={isVisible}
  from={{ opacity: 0, transform:'translateY(-4rem)'  }}
  enter={{ opacity: 1, transform:'translateY(0)' }}
  leave={{ opacity: 0, transform:'translateY(-4rem)'  }}>
  {show => show && (props => <div style={props} className='test'>HI</div>)}
</Transition> */}

    <div onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>

    </React.Fragment>
 )     
};

export default TestPage;
