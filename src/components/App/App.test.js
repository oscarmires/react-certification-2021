import React from 'react';
import { screen } from '@testing-library/react';

import App from './App';
import { SessionDataProvider, ThemeStateProvider } from '../../global-context';
import { renderWithRouter } from '../../util/testUtil';

jest.mock('../../util/YouTube');

describe('App', () => {
  it("navigates to home page on route '/'", () => {
    renderWithRouter(
      <SessionDataProvider>
        <ThemeStateProvider>
          <App />
        </ThemeStateProvider>
      </SessionDataProvider>,
      '/'
    );

    const title = screen.getByText(/React challenge/i);

    expect(title).toBeInTheDocument();
  });

  it("navigates to VideoDetails page on route '/video/videId'", () => {
    renderWithRouter(
      <SessionDataProvider>
        <ThemeStateProvider>
          <App />
        </ThemeStateProvider>
      </SessionDataProvider>,
      '/video/videoId'
    );

    const pageContainer = screen.getByTestId('video-details-page');

    expect(pageContainer).toBeInTheDocument();
  });

  it("navigates to ProfilePage page on route '/account'", () => {
    renderWithRouter(
      <SessionDataProvider>
        <ThemeStateProvider>
          <App />
        </ThemeStateProvider>
      </SessionDataProvider>,
      '/account'
    );

    const pageContainer = screen.getByTestId('profile-page');

    expect(pageContainer).toBeInTheDocument();
  });

  it('navigates to NotFound page on invalid route', () => {
    renderWithRouter(
      <SessionDataProvider>
        <ThemeStateProvider>
          <App />
        </ThemeStateProvider>
      </SessionDataProvider>,
      '/invalid-site'
    );

    const notFoundMessage = screen.getByText(/404./);

    expect(notFoundMessage).toBeInTheDocument();
  });
});
