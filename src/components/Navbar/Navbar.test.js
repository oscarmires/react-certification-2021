import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../index';

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('contains header element', () => {
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
