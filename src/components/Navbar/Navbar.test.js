import React from 'react';
import { render, screen } from '@testing-library/react';

import { Navbar } from '../index';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes';
import {
  ActiveDropdownProvider,
  SearchKeywordProvider,
  SessionDataProvider,
  ThemeStateProvider,
  useSessionData,
} from '../../global-context';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <ThemeStateProvider>
        <SessionDataProvider>
          <ActiveDropdownProvider>
            <ThemeProvider theme={lightTheme}>
              <SearchKeywordProvider>
                <Navbar />
              </SearchKeywordProvider>
            </ThemeProvider>
          </ActiveDropdownProvider>
        </SessionDataProvider>
      </ThemeStateProvider>
    );
  });

  it('contains header element', () => {
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
