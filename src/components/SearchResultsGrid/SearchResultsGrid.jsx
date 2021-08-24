import React from 'react';

import { CardsGrid, BackgroundText } from './SearchResultsGrid.components';
import { VideoCard } from '..';
import { useSearchKeyword, useSessionData } from '../../global-context';

const SearchResultsGrid = ({ resultItems }) => {
  const { searchKeyword } = useSearchKeyword();
  const { sessionData } = useSessionData();

  const checkIsFavorite = (videoId) => {
    return sessionData.favoriteVideos.some((video) => video.id.videoId === videoId);
  };

  const content = () => {
    if (resultItems.length > 0) {
      return resultItems.map((video) => (
        <VideoCard
          key={video.etag}
          videoItem={video}
          asFavorite={checkIsFavorite(video.id.videoId)}
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
