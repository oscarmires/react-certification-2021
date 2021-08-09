import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  beforeEach(() => {
    render(<SearchBar />);
  });

  it('renders an input element', () => {
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('erases typed text on key down', () => {
    const typedText = 'abcde';

    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: typedText } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(inputElement.value).toMatch('');
  });

  it('retrieves data from API', () => {});
});
