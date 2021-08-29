import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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

describe('VideoCard buttons', () => {
  it('saves video as favorite when it has not been saved', () => {
    renderWithRouter(
      <SessionDataProvider mockLogIn>
        <SelectedVideoProvider>
          <VideoCard videoItem={items[0]} />
        </SelectedVideoProvider>
      </SessionDataProvider>
    );

    const makeFavoriteBtn = screen.getByTestId('makeFavoriteBtn');
    fireEvent.click(makeFavoriteBtn);

    const noFavoriteBtn = screen.getByTestId('noFavoriteBtn');
    expect(noFavoriteBtn).toBeInTheDocument();
  });

  it('removes video from favorites if it is currently saved', () => {
    renderWithRouter(
      <SessionDataProvider mockLogIn mockFavorite={items[0]}>
        <SelectedVideoProvider>
          <VideoCard videoItem={items[0]} asFavorite />
        </SelectedVideoProvider>
      </SessionDataProvider>
    );

    const noFavoriteBtn = screen.getByTestId('noFavoriteBtn');
    fireEvent.click(noFavoriteBtn);

    const makeFavoriteBtn = screen.getByTestId('makeFavoriteBtn');
    expect(makeFavoriteBtn).toBeInTheDocument();
  });
});
