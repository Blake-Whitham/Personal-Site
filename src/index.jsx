import React from 'react';
import ReactDOM from 'react-dom';
import { TerminalContextProvider } from '@william-blake-whitham/react-terminal';

import App from './app';

ReactDOM.render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>,
  document.getElementById('app'),
);
