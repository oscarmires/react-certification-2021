import React from 'react';
import { render, screen } from '@testing-library/react';

import { VideoCard } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { SelectedVideoProvider } from '../../global-context';

let videoCard;

describe('VideoCard', () => {
  beforeEach(() => {
    videoCard = render(
      <SelectedVideoProvider>
        <VideoCard videoItem={items[0]} />
      </SelectedVideoProvider>
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
});
