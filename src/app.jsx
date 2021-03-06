import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSpring, animated } from 'react-spring';
import { throttle } from 'lodash';


import DemoCard from './demoCard';
import Live from './liveCard';

import About from './aboutme';

// const Calendar = lazy(() => require('./calendar'));
// import Calendar from './calendar';
// animation helpers
// import githubCalendar from 'github-calendar';


const Laptop = lazy(() => import('./laptop'));
const Calendar = lazy(() => import('./calendar'));


const { clientWidth } = document.documentElement;

const calc = (x, y) => [(y) * 3, x - x];
const trans1 = (x, y) => `translate3d(${-x}px,${y}px,0)`;

const App = () => {
  const [ user, setUser ] = useState('blake-whitham')

  function updateUser(name) {
    setUser(name);
  }

  //Paralax momentum
  const [{ xy }, set] = useSpring(() => ({
    xy: [-clientWidth * 0.8, 0], config: { mass: 100, tension: 50, friction: 10000 },
  }));

  const paralax = (event) => {
    set({ xy: calc(event.screenX, event.screenY) });
  };

  return (
    <div
      style={{
        backgroundImage: 'url(\'SF.webp\')',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%',
        height: 'auto',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        zIndex: '0',
      }}
      onMouseMove={throttle((event) => { paralax(event); }, 50)}
      onTouchMove={paralax}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-around',
          height: '300px',

        }}
      >
        <DemoCard />


        <div id="modal" />


        <Live />

      </div>

      <About />

      <Suspense fallback="...Loading">
        <Laptop updateUser={updateUser}/>
      </Suspense>

      <h1
        style={{
          margin: '2vh auto',
          padding: '2px 15px',
          zIndex: '3',
          borderRadius: '10px',
          backgroundImage:
          'linear-gradient(0deg, rgba(0, 0, 0,.5), rgba(255, 255, 255,.7))',
        }}
      >
        {user}'s Github History
      </h1>
      <Suspense fallback="...Loading">
        <Calendar user={user}/>
      </Suspense>

      <Suspense fallback="...Loading">
        <animated.img
          src="./fog.webp"
          alt="Rolling Fog Effect"
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
      </Suspense>
    </div>
  );
};

export default App;
