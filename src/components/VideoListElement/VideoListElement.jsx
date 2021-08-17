import React from 'react';

import { useSelectedVideo } from '../../global-context';

import {
  Container,
  Description,
  Thumbnail,
  ThumbnailImg,
  Title,
  InfoArea,
} from './VideoListElement.components';

const VideoListElement = ({ videoItem, setCurrentPage, fetchRelatedVideos }) => {
  const { setSelectedVideo } = useSelectedVideo();

  const handleClick = (e) => {
    setSelectedVideo(videoItem);
    fetchRelatedVideos(videoItem.id.videoId);
    setCurrentPage('VideoDetails');
    window.player.loadVideoById(videoItem.id.videoId);
    document.getElementById('related-videos-list').scroll(0, 0);
    window.scroll(0, 0);
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
