import React from 'react';
import { render, screen } from '@testing-library/react';

import { VideoDetailsPage } from '../';
import { items } from '../../mock/youtube-videos-mock.json';

describe('VideoListElement', () => {
  let page;
  beforeEach(() => {
    page = render(
      <VideoDetailsPage
        YouTubeData={items}
        selectedVideoIndex={0}
        changePage={jest.fn}
        searchKeyword={jest.fn}
      />
    );
  });

  it('renders a video player', () => {
    const videoPlayer = screen.getByTestId('video-player');
    page.debug();
    expect(videoPlayer).toBeInTheDocument();
  });
});
