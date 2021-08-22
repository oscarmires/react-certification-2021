import React from 'react';
import { screen } from '@testing-library/react';

import { SearchResultsGrid } from '../index';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { renderWithContext } from '../../util/testUtil';

describe('Navbar', () => {
  const searchResults = items;
  const setCurrentPage = jest.fn();
  const fetchRelatedVideos = jest.fn();
  it("renders cards from API's data", () => {
    renderWithContext(
      <SearchResultsGrid
        resultItems={searchResults}
        setCurrentPage={setCurrentPage}
        fetchRelatedVideos={fetchRelatedVideos}
      />
    );

    const sampleCard = screen.getByText(items[0].snippet.title);
    expect(sampleCard).toBeInTheDocument();
  });

  it('displays background message when no results where found', () => {
    const searchResults = [];

    renderWithContext(
      <SearchResultsGrid
        resultItems={searchResults}
        setCurrentPage={setCurrentPage}
        fetchRelatedVideos={fetchRelatedVideos}
      />
    );

    const backgroundMessage = screen.getByTestId('background-test');

    expect(backgroundMessage).toBeInTheDocument();
  });
});
