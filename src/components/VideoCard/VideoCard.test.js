import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideoCard } from '../';

import { items } from '../../mock/youtube-videos-mock.json';

describe('VideoCard', () => {
  beforeEach(() => {
    render(<VideoCard videoItem={items[0]} />);
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
