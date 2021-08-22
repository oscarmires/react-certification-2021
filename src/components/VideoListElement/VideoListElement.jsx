import React from 'react';
import { useHistory } from 'react-router';

import {
  Container,
  Description,
  Thumbnail,
  ThumbnailImg,
  Title,
  InfoArea,
} from './VideoListElement.components';

const VideoListElement = ({ videoItem, updateRelatedData }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/video/${videoItem.id.videoId}`);
    updateRelatedData(videoItem.id.videoId);
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
