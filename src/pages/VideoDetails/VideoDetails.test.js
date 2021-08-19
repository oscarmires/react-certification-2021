// const { JSDOM } = require('jsdom');
// const page = new JSDOM(`<body></body>`);

import React from 'react';
import { render, screen } from '@testing-library/react';

import { VideoDetailsPage } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { items as relatedVideos } from '../../mock_data/related-videos-mock.json';
import YouTube from '../../util/YouTube';
import { SearchKeywordProvider, SelectedVideoProvider } from '../../global-context';

jest.mock('../../util/YouTube');

describe('VideoListElement', () => {
  const selectedVideo = items[0];
  beforeEach(() => {
    render(
      <SearchKeywordProvider>
        <SelectedVideoProvider>
          <VideoDetailsPage relatedVideos={relatedVideos} />
        </SelectedVideoProvider>
      </SearchKeywordProvider>
    );
  });

  it("renders the video player's div", () => {
    const videoPlayer = screen.getByTestId('video-player');
    expect(videoPlayer).toBeInTheDocument();
  });

  it("calls YouTube's iframe for the provided video ID", () => {
    const videoId = selectedVideo.id.videoId;
    const useYouTubePlayerSpy = jest.spyOn(YouTube, 'useYouTubePlayer');

    expect(useYouTubePlayerSpy.mock.calls[0][0]).toBe(videoId);
  });
});
