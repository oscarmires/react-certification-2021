import React from 'react';
import { render, screen } from '@testing-library/react';

import { VideoListElement } from '../';
import { items } from '../../mock/youtube-videos-mock.json';

describe('VideoListElement', () => {
  beforeEach(() => {
    render(<VideoListElement videoItem={items[0]} />);
  });

  it('renders a thumbnail image', () => {
    const imageAltText = items[0].snippet.title;
    const image = screen.getByAltText(imageAltText);

    expect(image).toBeInTheDocument();
  });
});
