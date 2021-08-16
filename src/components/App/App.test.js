import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  global.window.gapi = { load: jest.fn() };

  beforeEach(() => {
    render(<App />);
  });

  it('sets GAPI after mounting', () => {
    expect(global.window.gapi.load).toBeCalled();
  });
});
