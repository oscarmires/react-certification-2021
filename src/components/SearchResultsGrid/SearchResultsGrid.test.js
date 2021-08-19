import React from 'react';
import { render, screen } from '@testing-library/react';

import { SearchResultsGrid } from '../index';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { SearchKeywordProvider, SelectedVideoProvider } from '../../global-context';

describe('Navbar', () => {
  const searchResults = items;
  const setCurrentPage = jest.fn();
  const fetchRelatedVideos = jest.fn();
  it("renders cards from API's data", () => {
    render(
      <SearchKeywordProvider>
        <SelectedVideoProvider>
          <SearchResultsGrid
            resultItems={searchResults}
            setCurrentPage={setCurrentPage}
            fetchRelatedVideos={fetchRelatedVideos}
          />
        </SelectedVideoProvider>
      </SearchKeywordProvider>
    );

    const sampleCard = screen.getByText(items[0].snippet.title);
    expect(sampleCard).toBeInTheDocument();
  });

  it('displays background message when no results where found', () => {
    const searchResults = [];

    render(
      <SearchKeywordProvider>
        <SelectedVideoProvider>
          <SearchResultsGrid
            resultItems={searchResults}
            setCurrentPage={setCurrentPage}
            fetchRelatedVideos={fetchRelatedVideos}
          />
        </SelectedVideoProvider>
      </SearchKeywordProvider>
    );

    const backgroundMessage = screen.getByTestId('background-test');

    expect(backgroundMessage).toBeInTheDocument();
  });
});
