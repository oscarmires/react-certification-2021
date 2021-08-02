import React from 'react';
import { CardsGrid } from './Results.components';
import { VideoCard } from '../';

const Results = ({ resultItems }) => {
  return (
    <CardsGrid>
      {resultItems.map((video) => (
        <VideoCard videoItem={video} key={video.etag} />
      ))}
    </CardsGrid>
  );
};

export default Results;
