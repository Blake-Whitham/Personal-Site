/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
// import "./styles.css";
import { ReactTerminal } from '@william-blake-whitham/react-terminal';

export default function Terminal() {
  const [carot, setCarot] = useState('anonUser %');
  const screen = {
    availHeight: window.screen.availHeight,
    availLeft: window.screen.availLeft,
    availTop: window.screen.availTop,
    availWidth: window.screen.availWidth,
    colorDepth: window.screen.colorDepth,
    Height: window.screen.height,
    orientation: {
      angle: window.screen.orientation.angle,
      type: window.screen.orientation.type,
    },
    pixelDepth: window.screen.pixelDepth,
    width: window.screen.width,
  };

  const replacer = (key, value) => {
    if (JSON.stringify(value) === '{}' || JSON.stringify(value) === '[]') {
      return undefined;
    }
    return value;
  };
  const commands = {
    whoami: 'Blake',
    cd: (directory) => `changed path to ${directory}`,
    crash: () => {
      const heap = [];
      while (1) {
        heap.push(Date.now());
        console.log(JSON.stringify(heap, null, 2));
      }
    },
    userdata: () => (`${JSON.stringify(window.clientInformation.appVersion, null, 2)}`),

    screendata: () => (JSON.stringify(screen, null, 2)),

    performance: () => (`${JSON.stringify(performance.getEntriesByType('navigation')[0].toJSON(), replacer, 2)}`),

    changeCarot: (pointer) => {
      setCarot(`anonUser ${pointer}`);
      return 'carot updated';
    },
  };

  const welcomeMessage = (
    <span>
      available commands:
      {' '}
      {Object.keys(commands).join(', ')}
      <br />
    </span>
  );
  commands.boobs = '( * ㅅ * ) hehehe';

  return (
    <ReactTerminal
      themes={{
        theme: {
          themeBGColor: '#022833',
          themeToolbarColor: '#131519',
          themeColor: '#839496',
          themePromptColor: '#c4c4c4',
        },
      }}
      theme="theme"
      welcomeMessage={welcomeMessage}
      commands={commands}
      prompt={carot || '%'}
      // showControlButtons={false}
    />
  );
}
