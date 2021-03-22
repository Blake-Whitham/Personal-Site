import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import githubCalendar from 'github-calendar';

import Card from './card';

import Laptop from './laptop';

import Calendar from './calendar';

import About from './aboutme';

// animation helpers
const clientWidth = function () {
  return Math.max(window.innerWidth, document.documentElement.clientWidth);
};
const clientHeight = function () {
  return Math.max(window.innerHeight, document.documentElement.clientHeight);
};

const calc = (x, y) => [y + clientWidth, x - x];
const trans1 = (x, y) => `translate3d(${-x}px,${y}px,0)`;

const App = () => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [-clientWidth(), 0], config: { mass: 10, tension: 50, friction: 3000 },
  }));

  useEffect(() => {
    githubCalendar('.calendar', 'blake-whitham', { responsive: true });
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(\'SF.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%',
        height: '2000px',
        width: '100vw',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        zIndex: '0',
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onTouchMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-around',
          height: '300px',

        }}
      >
        <Card title=" Create " />

        <div>c2</div>

        <Card title=" Live " />

      </div>

      <About />

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
