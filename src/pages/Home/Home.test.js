import React from 'react';
import { render, screen } from '@testing-library/react';

import { HomePage } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { SearchKeywordProvider, SelectedVideoProvider } from '../../global-context';

describe('VideoListElement', () => {
  beforeEach(() => {
    render(
      <SearchKeywordProvider>
        <SelectedVideoProvider>
          <HomePage YouTubeData={items} />
        </SelectedVideoProvider>
      </SearchKeywordProvider>
    );
  });

  it('renders a title', () => {
    const title = screen.getByText(/React challenge/i);

    expect(title).toBeInTheDocument();
  });
});
