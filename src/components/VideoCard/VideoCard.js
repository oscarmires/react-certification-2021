import React from 'react';

import { Card, InfoArea, Thumbnail, ThumbnailImg } from './VideoCard.components';

const VideoCard = ({ videoItem }) => {
  return (
    <Card key={videoItem.etag}>
      <Thumbnail>
        <ThumbnailImg
          src={videoItem.snippet.thumbnails.medium.url}
          alt={videoItem.snippet.title}
        />
      </Thumbnail>
      <InfoArea>
        <h2 style={{ margin: '5px 0' }}>{videoItem.snippet.title}</h2>
        <p>{videoItem.snippet.description}</p>
      </InfoArea>
    </Card>
  );
};

export default VideoCard;
