import React from 'react';
// import "./styles.css";
import { ReactTerminal } from '@william-blake-whitham/react-terminal';

export default function Terminal(carot) {
  const commands = {
    whoami: 'Blake',
    cd: (directory) => `changed path to ${directory}`,
  };

  const welcomeMessage = (
    <span>
      available commands:
      {' '}
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
