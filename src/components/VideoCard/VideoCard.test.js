import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { VideoCard } from '../';

import { items } from '../../mock/youtube-videos-mock.json';

let videoCard;

describe('VideoCard', () => {
  const setCurrentPage = jest.fn();
  const setSelectedVideoIndex = jest.fn();

  beforeEach(() => {
    videoCard = render(
      <VideoCard
        setCurrentPage={setCurrentPage}
        setSelectedVideoIndex={setSelectedVideoIndex}
        videoItem={items[0]}
      />
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

  it('leads to VideoDetails page on click', () => {
    const container = screen.getByTestId('card-div');
    fireEvent.click(container);
    expect(setCurrentPage.mock.calls.length).toBe(1);
  });
});
