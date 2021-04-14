/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
// import "./styles.css";
import { ReactTerminal } from '@william-blake-whitham/react-terminal';

export default function Terminal({ updateUser }) {
  const [carot, setCarot] = useState('Intraweb:dev-site anon$');
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
    checkmygithub: (name) => { updateUser(name) },
    cd: (directory) => directory? `changed path to ${directory}`: ' is not a valid directory',
    crash: () => {
      alert('Why did you do that?')
      alert('')
      alert('Why?')
      // eslint-disable-next-line no-constant-condition
      while (1) {
        // eslint-disable-next-line no-console
        console.log('current time in milliseconds is:', Date.now());
      }
    },
    userdata: () => (`${JSON.stringify(window.clientInformation.userAgent, null, 2)}`),

    screendata: () => (JSON.stringify(screen, null, 2)),

    performance: () => (`${JSON.stringify(performance.getEntriesByType('navigation')[0].toJSON(), replacer, 2)}`),

    changeCarot: (pointer) => {
      setCarot(`Intraweb:dev-site anon${pointer}`);
      return 'carot updated';
    },
    cowsay: (phrase) => {
      const text =
`         ${'-'.repeat(phrase.length+2)}
        | ${phrase} |
         ${'-'.repeat(phrase.length+2)}
              \\   ^__^
               \\  (oo)\_______
                  (__)\\       )\\/\\
                      ||----w |
                      ||     ||`
      return text
    },
    help: () => {
      return`
      (param) = following text EX: cowsay HELLO | HELLO is the param
whoami         - prints my name
checkmygithub  - (param): retrieves (param)'s github history
crash          - WARNING DO NOT USE
userdata       - prints web accessible data about your computer
screendata     - print your current screen data
performance    - prints site performance from your system's perspective
changeCarot    - (param): assigns (param) to carot
cowsay         - (param): type something after cowsay to see a cow speak
help           - prints command usage and instructions
`
    },
  };

  const welcomeMessage = (
    <span>
{`  _________
 | Try Me! |
  ---------
        \\   ^__^
         \\  (oo)\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
available commands: `}
      {Object.keys(commands).join(', ')}
      <br />
    </span>
  );

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
