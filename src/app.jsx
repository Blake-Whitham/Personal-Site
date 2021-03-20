import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import githubCalendar from 'github-calendar';

import Laptop from './laptop';
import Screen from './screen';
import Terminal from './terminal';

import Calendar from './calendar';

// animation helpers
const calc = (x, y) => [y + window.innerWidth, x - x];
const trans1 = (x, y) => `translate3d(${-x}px,${y}px,0)`;

const App = () => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [-700, 0], config: { mass: 10, tension: 50, friction: 3000 },
  }));
  useEffect(() => {
    githubCalendar('.calendar', 'blake-whitham');
  }, []);
  return (
    <div
      style={{
        backgroundImage: 'url(\'SF.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        zIndex: '0',
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-around',
          height: '1000px',

        }}
      >
        <div>c1</div>
        <div>c2</div>
        <div>c3</div>
      </div>

      <Laptop />

      <Calendar>
        <div className="calendar" />
      </Calendar>

      <animated.img
        src="./fog.png"
        style={{
          height: '125%',
          width: 'auto',
          position: 'fixed',
          bottom: '0',
          left: '0',
          transform: xy.interpolate(trans1),
          zIndex: '0',
        }}
      />
    </div>
  );
};

export default App;
