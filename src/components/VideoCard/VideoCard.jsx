import React from 'react';

import { Card, InfoArea, Thumbnail, ThumbnailImg } from './VideoCard.components';
import { useSelectedVideo } from '../../global-context';

const VideoCard = ({ videoItem, setCurrentPage, fetchRelatedVideos }) => {
  const { setSelectedVideo } = useSelectedVideo();

  const handleClick = (e) => {
    setSelectedVideo(videoItem);
    fetchRelatedVideos(videoItem.id.videoId);
    setCurrentPage('VideoDetails');
  };

  return (
    <Card key={videoItem.etag} data-testid="card-div" onClick={handleClick}>
      <Thumbnail>
        <ThumbnailImg
          src={videoItem.snippet.thumbnails.medium.url}
          alt={videoItem.snippet.title}
        />
      </Thumbnail>
      <InfoArea>
        <h2>{videoItem.snippet.title}</h2>
        <p>{videoItem.snippet.description}</p>
      </InfoArea>
    </Card>
  );
};

export default VideoCard;
