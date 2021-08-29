// const { JSDOM } = require('jsdom');
// const page = new JSDOM(`<body></body>`);

import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';

import { VideoDetailsPage } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { items as relatedVideos } from '../../mock_data/related-videos-mock.json';
import YouTube from '../../util/YouTube';
import { renderWithContext, renderWithRouter } from '../../util/testUtil';
import {
  ActiveDropdownProvider,
  IsClientLoadedProvider,
  SearchKeywordProvider,
  SelectedVideoProvider,
  SessionDataProvider,
} from '../../global-context';

jest.mock('../../util/YouTube');

describe('VideoDetailsPage', () => {
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

describe('VideoDetailsPage buttons', () => {
  it('saves video as favorite when it has not been saved', async () => {
    renderWithRouter(
      <SessionDataProvider mockLogIn>
        <ActiveDropdownProvider>
          <IsClientLoadedProvider>
            <SearchKeywordProvider>
              <SelectedVideoProvider id="wrapper" mock>
                <VideoDetailsPage
                  relatedVideos={relatedVideos}
                  setRelatedVideos={jest.fn()}
                  match={{ params: { videoId: items[0].id.videoId } }}
                />
              </SelectedVideoProvider>
            </SearchKeywordProvider>
          </IsClientLoadedProvider>
        </ActiveDropdownProvider>
      </SessionDataProvider>
    );

    const makeFavoriteBtn = screen.getByTestId('makeFavoriteBtn');
    fireEvent.click(makeFavoriteBtn);

    await waitFor(() => {
      const noFavoriteBtn = screen.getByTestId('noFavoriteBtn');
      expect(noFavoriteBtn).toBeInTheDocument();
    });
  });

  it('removes video from favorites if it is currently saved', async () => {
    renderWithRouter(
      <SessionDataProvider mockLogIn mockFavorite={items[0]}>
        <ActiveDropdownProvider>
          <IsClientLoadedProvider>
            <SearchKeywordProvider>
              <SelectedVideoProvider id="wrapper" mock>
                <VideoDetailsPage
                  relatedVideos={relatedVideos}
                  setRelatedVideos={jest.fn()}
                  match={{ params: { videoId: items[0].id.videoId } }}
                />
              </SelectedVideoProvider>
            </SearchKeywordProvider>
          </IsClientLoadedProvider>
        </ActiveDropdownProvider>
      </SessionDataProvider>
    );

    const noFavoriteBtn = screen.getByTestId('noFavoriteBtn');
    fireEvent.click(noFavoriteBtn);

    await waitFor(() => {
      const makeFavoriteBtn = screen.getByTestId('makeFavoriteBtn');
      expect(makeFavoriteBtn).toBeInTheDocument();
    });
  });
});
