import React from 'react';
import { screen } from '@testing-library/react';

import App from './App';
import { ThemeStateProvider } from '../../global-context';
import { renderWithRouter } from '../../util/testUtil';

jest.mock('../../util/YouTube');

describe('App', () => {
  it("navigates to home page on route '/'", () => {
    renderWithRouter(
      <ThemeStateProvider>
        <App />
      </ThemeStateProvider>,
      '/'
    );

    const title = screen.getByText(/React challenge/i);

    expect(title).toBeInTheDocument();
  });

  it("navigates to VideoDetails page on route '/video/videId'", () => {
    renderWithRouter(
      <ThemeStateProvider>
        <App />
      </ThemeStateProvider>,
      '/video/videoId'
    );

    const pageContainer = screen.getByTestId('video-details-page');

    expect(pageContainer).toBeInTheDocument();
  });

  it('navigates to NotFound page on invalid route', () => {
    renderWithRouter(
      <ThemeStateProvider>
        <App />
      </ThemeStateProvider>,
      '/invalid-site'
    );

    const notFoundMessage = screen.getByText(/404./);

    expect(notFoundMessage).toBeInTheDocument();
  });
});
