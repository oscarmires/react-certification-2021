import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchResultsGrid } from '../index';

describe('Navbar', () => {
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
