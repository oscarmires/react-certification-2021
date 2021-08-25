import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components';
import { ThemeStateProvider, SessionDataProvider } from './global-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionDataProvider>
        <ThemeStateProvider>
          <App />
        </ThemeStateProvider>
      </SessionDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
