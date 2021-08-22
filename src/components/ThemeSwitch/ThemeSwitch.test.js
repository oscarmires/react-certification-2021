import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { ThemeSwitch } from '..';
import { ThemeStateProvider } from '../../global-context';

describe('ThemeSwitch', () => {
  beforeEach(() => {
    render(
      <ThemeStateProvider>
        <ThemeSwitch />
      </ThemeStateProvider>
    );
  });
  it("changes stored 'darkThemeEnabled' value on click", () => {
    const themeSwitch = screen.getByTestId('switch');
    const isDark = false;
    window.localStorage.setItem('darkThemeEnabled', isDark);

    fireEvent.click(themeSwitch);

    expect(window.localStorage.getItem('darkThemeEnabled')).not.toBe(isDark);
  });
});
