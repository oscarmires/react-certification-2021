import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

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

  it('displays dropdown menu on menuBtn click', async () => {
    const menuBtn = screen.getByTestId('menu-button');
    const dropdownMenu = screen.getByTestId('dropdown-menu');

    fireEvent.click(menuBtn);

    await waitFor(() => {
      const style = window.getComputedStyle(dropdownMenu);

      expect(style.display).toBe('flex');
    });
  });

  it('displays account menu on accountBtn click', async () => {
    const accountBtn = screen.getByTestId('profile-button');
    const accountMenu = screen.getByTestId('accountPopUp');

    fireEvent.click(accountBtn);

    await waitFor(() => {
      const style = window.getComputedStyle(accountMenu);

      expect(style.display).toBe('flex');
    });
  });
});
