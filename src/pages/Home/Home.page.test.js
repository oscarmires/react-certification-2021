import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './Home.page';

describe('HomePage', () => {
  it('renders', () => {
    render(<HomePage />);
  });
});
