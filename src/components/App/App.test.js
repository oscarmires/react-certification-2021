import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import { ThemeStateProvider } from '../../global-context';

describe('App', () => {
  global.window.gapi = { load: jest.fn() };

  beforeEach(() => {
    render(
      <ThemeStateProvider>
        <App />
      </ThemeStateProvider>
    );
  });

  it('sets GAPI after mounting', () => {
    expect(global.window.gapi.load).toBeCalled();
  });
});
