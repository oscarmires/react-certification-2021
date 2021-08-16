import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../index';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Navbar />
      </ThemeProvider>
    );
  });

  it('contains header element', () => {
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
