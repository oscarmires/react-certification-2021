import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchResultsGrid } from '../index';
import { items } from '../../mock_data/youtube-videos-mock.json';

describe('Navbar', () => {
  it("renders cards from API's data", () => {
    const searchResults = items;
    const searchKeyword = 'wizeline';

    render(
      <SearchResultsGrid resultItems={searchResults} searchKeyword={searchKeyword} />
    );

    const sampleCard = screen.getByText(items[0].snippet.title);
    expect(sampleCard).toBeInTheDocument();
  });

  it('displays background message when no results where found', () => {
    const searchResults = [];
    const searchKeyword = 'uncommon word';

    render(
      <SearchResultsGrid resultItems={searchResults} searchKeyword={searchKeyword} />
    );
    const backgroundMessage = screen.getByTestId('background-test');

    expect(backgroundMessage).toBeInTheDocument();
  });
});
