import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { VideoListElement } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { SelectedVideoProvider } from '../../global-context';

import YouTube from '../../util/YouTube';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../util/YouTube');

describe('VideoListElement', () => {
  const updateRelatedData = jest.fn((id) => {
    YouTube.getRelatedVideos(id);
    YouTube.getByVideoId(id);
  });
  const setSelectedVideo = jest.fn();

  beforeEach(() => {
    const container = document.createElement('div');
    container.id = 'related-videos-list';
    container.scroll = jest.fn();
    document.body.appendChild(container);
    render(
      <BrowserRouter>
        <SelectedVideoProvider>
          <VideoListElement
            videoItem={items[0]}
            updateRelatedData={updateRelatedData}
            setSelectedVideo={setSelectedVideo}
          />
        </SelectedVideoProvider>
      </BrowserRouter>,
      document.getElementById('related-videos-list')
    );
  });

  it('renders a thumbnail image', () => {
    const imageAltText = items[0].snippet.title;
    const image = screen.getByAltText(imageAltText);

    expect(image).toBeInTheDocument();
  });

  it('calls function to fetch new related videos on click', () => {
    const getRelatedVideosSpy = jest.spyOn(YouTube, 'getRelatedVideos');
    const getByVideoIdSpy = jest.spyOn(YouTube, 'getByVideoId');
    const container = screen.getByTestId('element-container');
    // mock YouTube's player object
    global.window.player = {};
    global.window.player.loadVideoById = jest.fn();

    fireEvent.click(container);

    expect(getRelatedVideosSpy).toBeCalledTimes(1);
    expect(getByVideoIdSpy).toBeCalledTimes(1);
  });
});
