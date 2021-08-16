import React from 'react';
import { CardsGrid, BackgroundText } from './SearchResultsGrid.components';
import { VideoCard } from '..';

const SearchResultsGrid = ({
  resultItems,
  searchKeyword,
  setCurrentPage,
  setSelectedVideoIndex,
}) => {
  const content = () => {
    if (resultItems.length > 0) {
      return resultItems.map((video, index) => (
        <VideoCard
          key={video.etag}
          videoItem={video}
          index={index}
          setCurrentPage={setCurrentPage}
          setSelectedVideoIndex={setSelectedVideoIndex}
        />
      ));
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
