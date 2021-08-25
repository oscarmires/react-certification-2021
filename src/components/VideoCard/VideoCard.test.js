import React from 'react';
import { render, screen } from '@testing-library/react';

import { VideoCard } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { SelectedVideoProvider, SessionDataProvider } from '../../global-context';
import { renderWithRouter } from '../../util/testUtil';

let videoCard;

describe('VideoCard', () => {
  beforeEach(() => {
    videoCard = renderWithRouter(
      <SessionDataProvider mockLogIn>
        <SelectedVideoProvider>
          <VideoCard videoItem={items[0]} />
        </SelectedVideoProvider>
      </SessionDataProvider>
    );
  });

  it('renders a card title', () => {
    const headingElement = screen.queryByText(items[0].snippet.title);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders a card description paragraph', () => {
    const descriptionParagraph = screen.getByText(items[0].snippet.description);
    expect(descriptionParagraph).toBeInTheDocument();
  });

  it('displays a thumbnail in a card', () => {
    const thumbnail = screen.queryByText(items[0].snippet.title);
    expect(thumbnail).toBeInTheDocument();
  });

  it('displays a button on hover', () => {});
});
