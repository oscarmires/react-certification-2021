import { items as searchResultVideos } from '../../mock_data/youtube-videos-mock.json';
import { items as relatedVideos } from '../../mock_data/related-videos-mock.json';

const YouTube = {
  gapiLoadClient: jest.fn(),

  executeSearch: jest.fn().mockResolvedValue(searchResultVideos),

  getRelatedVideos: jest.fn().mockResolvedValue(relatedVideos),

  getByVideoId: jest.fn().mockResolvedValue(relatedVideos[0]),

  useYouTubePlayer: jest.fn(() => {
    console.log('test iframe loaded');
  }),
};

export default YouTube;
