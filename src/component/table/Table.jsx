import React from 'react';
import PropTypes from 'prop-types';

// import { useSpring, animated } from 'react-spring'

import TableRow from './TableRow';

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.03]
// const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default  function Table({ data }) {
  // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20 } }))
  return(
      <React.Fragment>
        {/* <animated.div 
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}> */}
    
          <table>
          <tbody className='tablebox-box'>
            {data.map((pair) => (
              <TableRow
                key={pair.label}
                label={pair.label}
                value={pair.value}
                link={pair.link}
              />
            ))}
          </tbody>
        </table>
      {/* </animated.div> */}
    </React.Fragment>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    link: PropTypes.string,
  })).isRequired,
};

