import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithContext } from '../../util/testUtil';

import ProfilePage from './Profile.page';

describe('profile', () => {
  beforeEach(() => {
    renderWithContext(<ProfilePage />);
  });
  it('renders a title with text "Account"', () => {
    const title = screen.getByText('Account');
    expect(title).toBeInTheDocument();
  });

  it('renders a page container element', () => {
    const container = screen.getByTestId('profile-page');
    expect(container).toBeInTheDocument();
  });
});
