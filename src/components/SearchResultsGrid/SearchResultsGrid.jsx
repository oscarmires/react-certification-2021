import React from 'react';
import { CardsGrid, BackgroundText } from './SearchResultsGrid.components';
import { VideoCard } from '..';

const SearchResultsGrid = ({ resultItems, searchKeyword }) => {
  const content = () => {
    if (resultItems.length > 0) {
      return resultItems.map((video) => <VideoCard videoItem={video} key={video.etag} />);
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
