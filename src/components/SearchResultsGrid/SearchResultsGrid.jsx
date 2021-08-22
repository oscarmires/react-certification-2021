import React from 'react';

import { CardsGrid, BackgroundText } from './SearchResultsGrid.components';
import { VideoCard } from '..';
import { useSearchKeyword } from '../../global-context';

const SearchResultsGrid = ({ resultItems, setCurrentPage, fetchRelatedVideos }) => {
  const { searchKeyword } = useSearchKeyword();

  const content = () => {
    if (resultItems.length > 0) {
      return resultItems.map((video) => <VideoCard key={video.etag} videoItem={video} />);
    } else {
      return (
        <BackgroundText data-testid="background-test">
          No videos found for "{searchKeyword}"
        </BackgroundText>
      );
    }
  };

  return <CardsGrid>{content()}</CardsGrid>;
};

export default SearchResultsGrid;
