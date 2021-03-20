import React from 'react';
// import "./styles.css";
import { ReactTerminal } from 'react-terminal';

export default function Terminal() {
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
      welcomeMessage={welcomeMessage}
      commands={commands}
      theme="dracula"
    />
  );
}
