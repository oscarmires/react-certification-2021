import React from 'react';
import { screen } from '@testing-library/react';

import { HomePage } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { renderWithContext } from '../../util/testUtil';
import { BrowserRouter } from 'react-router-dom';

describe('VideoListElement', () => {
  window.gapi = { load: jest.fn() };
  beforeEach(() => {
    renderWithContext(
      <BrowserRouter>
        <HomePage YouTubeData={items} />
      </BrowserRouter>
    );
  });

  it('sets GAPI client after mounting', () => {
    expect(global.window.gapi.load).toBeCalled();
  });

  it('renders a title', () => {
    const title = screen.getByText(/React challenge/i);

    expect(title).toBeInTheDocument();
  });
});
