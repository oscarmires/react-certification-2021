import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components';
import { ThemeStateProvider } from './global-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeStateProvider>
        <App />
      </ThemeStateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
