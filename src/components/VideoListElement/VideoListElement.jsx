import React from 'react';

import {
  Container,
  Description,
  Thumbnail,
  ThumbnailImg,
  Title,
  InfoArea,
} from './VideoListElement.components';

const VideoListElement = ({
  videoItem,
  setCurrentPage,
  fetchRelatedVideos,
  setSelectedVideo,
}) => {
  const handleClick = (e) => {
    fetchRelatedVideos(videoItem.id.videoId);
    window.scroll(0, 0);
    setCurrentPage('VideoDetails');
    window.player.loadVideoById(videoItem.id.videoId);
    document.getElementById('related-videos-list').scroll(0, 0);
    setSelectedVideo(videoItem);
  };

  return (
    <Container onClick={handleClick} data-testid="element-container">
      <Thumbnail>
        <ThumbnailImg
          src={videoItem.snippet.thumbnails.default.url}
          alt={videoItem.snippet.title}
        />
      </Thumbnail>
      <InfoArea>
        <Title>{videoItem.snippet.title.slice(0, 30)}</Title>
        <Description>{videoItem.snippet.description.slice(0, 50)}</Description>
      </InfoArea>
    </Container>
  );
};

export default VideoListElement;
