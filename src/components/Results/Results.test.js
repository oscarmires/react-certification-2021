import React from 'react';
import { render, screen } from '@testing-library/react';
import { Results } from '../index';

const testMockItems = [
  {
    kind: 'youtube#searchResult',
    etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
    id: {
      kind: 'youtube#channel',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    },
    snippet: {
      publishedAt: '2014-09-27T01:39:18Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline',
      description:
        "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
      thumbnails: {
        default: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
        },
        medium: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
        },
        high: {
          url:
            'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'upcoming',
      publishTime: '2014-09-27T01:39:18Z',
    },
  },
];

describe('Results', () => {
  beforeEach(() => {
    render(<Results searchResultItems={testMockItems} />);
  });

  it('renders a card title', () => {
    const headingElement = screen.getByText(testMockItems[0].snippet.title);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders a card description paragraph', () => {
    const descriptionParagraph = screen.getByText(testMockItems[0].snippet.description);
    expect(descriptionParagraph).toBeInTheDocument();
  });

  it('displays a thumbnail in a card', () => {
    const thumbnail = screen.getByAltText(testMockItems[0].snippet.title);
    expect(thumbnail).toBeInTheDocument();
  });
});
