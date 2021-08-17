import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components';
import { ThemeStateProvider } from './global-context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStateProvider>
      <App />
    </ThemeStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
