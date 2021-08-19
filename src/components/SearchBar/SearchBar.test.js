import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import SearchBar from './SearchBar';
import YouTube from '../../util/YouTube';
import { SearchKeywordProvider } from '../../global-context';

jest.mock('../../util/YouTube');

describe('SearchBar', () => {
  const updateVideos = jest.fn();
  const setCurrentPage = jest.fn();
  const updateSearchKeyword = jest.fn();

  beforeEach(() => {
    render(
      <SearchKeywordProvider>
        <SearchBar
          updateVideos={updateVideos}
          setCurrentPage={setCurrentPage}
          updateSearchKeyword={updateSearchKeyword}
        />
      </SearchKeywordProvider>
    );
  });

  it('renders an input element', () => {
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('erases typed text on key down', () => {
    // YouTube.executeSearch = jest.fn().mockResolvedValue(items);
    const typedText = 'abcde';

    const inputElement = screen.getByTestId('search-input');
    act(() => {
      fireEvent.change(inputElement, { target: { value: typedText } });
      fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', keyCode: 13 });
    });

    expect(inputElement.value).toMatch('');
  });

  it('calls API executeSearch on enter', () => {
    const typedText = 'abcde';
    const executeSearchSpy = jest.spyOn(YouTube, 'executeSearch');

    const inputElement = screen.getByTestId('search-input');
    act(() => {
      fireEvent.change(inputElement, { target: { value: typedText } });
      fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', keyCode: 13 });
    });
    expect(executeSearchSpy).toBeCalled();
  });
});
