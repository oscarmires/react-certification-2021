import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { VideoListElement } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { SelectedVideoProvider } from '../../global-context';

import YouTube from '../../util/YouTube';

describe('VideoListElement', () => {
  const setCurrentPage = jest.fn();
  const fetchRelatedVideos = jest.fn((id) => YouTube.getRelatedVideos(id));
  const setSelectedVideo = jest.fn();

  beforeEach(() => {
    const container = document.createElement('div');
    container.id = 'related-videos-list';
    container.scroll = jest.fn();
    document.body.appendChild(container);
    render(
      <SelectedVideoProvider>
        <VideoListElement
          videoItem={items[0]}
          setCurrentPage={setCurrentPage}
          fetchRelatedVideos={fetchRelatedVideos}
          setSelectedVideo={setSelectedVideo}
        />
      </SelectedVideoProvider>,
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
    const container = screen.getByTestId('element-container');
    // mock YouTube's player object
    global.window.player = {};
    global.window.player.loadVideoById = jest.fn();
    // mock

    fireEvent.click(container);

    expect(getRelatedVideosSpy).toBeCalled();
  });
});
