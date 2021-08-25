import React from 'react';
import { screen } from '@testing-library/react';

import { SearchResultsGrid } from '../index';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { renderWithContext } from '../../util/testUtil';
import { BrowserRouter } from 'react-router-dom';

describe('SearchResultsGrid', () => {
  const searchResults = items;
  const setCurrentPage = jest.fn();
  const fetchRelatedVideos = jest.fn();
  it("renders cards from API's data", () => {
    renderWithContext(
      <BrowserRouter>
        <SearchResultsGrid
          resultItems={searchResults}
          setCurrentPage={setCurrentPage}
          fetchRelatedVideos={fetchRelatedVideos}
        />
      </BrowserRouter>
    );

    const sampleCard = screen.getByText(items[0].snippet.title);
    expect(sampleCard).toBeInTheDocument();
  });

  it('displays background message when no results where found', () => {
    const searchResults = [];

    renderWithContext(
      <BrowserRouter>
        <SearchResultsGrid
          resultItems={searchResults}
          setCurrentPage={setCurrentPage}
          fetchRelatedVideos={fetchRelatedVideos}
        />
      </BrowserRouter>
    );

    const backgroundMessage = screen.getByTestId('background-test');

    expect(backgroundMessage).toBeInTheDocument();
  });
});
