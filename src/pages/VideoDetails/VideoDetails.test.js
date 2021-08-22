// const { JSDOM } = require('jsdom');
// const page = new JSDOM(`<body></body>`);

import React from 'react';
import { screen } from '@testing-library/react';

import { VideoDetailsPage } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { items as relatedVideos } from '../../mock_data/related-videos-mock.json';
import YouTube from '../../util/YouTube';
import { renderWithContext } from '../../util/testUtil';

jest.mock('../../util/YouTube');

describe('VideoListElement', () => {
  const selectedVideo = items[0];
  global.window.gapi = { load: jest.fn() };

  beforeEach(() => {
    renderWithContext(
      <VideoDetailsPage
        relatedVideos={relatedVideos}
        setRelatedVideos={jest.fn()}
        match={{ params: { videoId: items[0].id.videoId } }}
      />
    );
  });

  it('sets GAPI client after mounting', () => {
    const gapiLoadClientSpy = jest.spyOn(YouTube, 'gapiLoadClient');
    expect(gapiLoadClientSpy).toBeCalled();
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
