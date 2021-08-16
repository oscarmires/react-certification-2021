import React from 'react';
import { render, screen } from '@testing-library/react';

import { HomePage } from '../';
import { items } from '../../mock_data/youtube-videos-mock.json';

describe('VideoListElement', () => {
  beforeEach(() => {
    render(<HomePage YouTubeData={items} />);
  });

  it('renders a title', () => {
    const title = screen.getByText(/React challenge/i);

    expect(title).toBeInTheDocument();
  });
});
