import React from 'react';
import { InfoArea } from '../VideoCard/VideoCard.components';
import {
  Container,
  Description,
  Thumbnail,
  ThumbnailImg,
  Title,
} from './VideoListElement.components';

const VideoListElement = ({ videoItem, index, changePage }) => {
  const handleClick = (e) => {
    window.scroll(0, 0);
    changePage('VideoDetails', index);
    window.player.loadVideoById(videoItem.id.videoId);
  };

  return (
    <Container onClick={handleClick}>
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
