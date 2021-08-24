import React from 'react';
import { useHistory } from 'react-router';

import {
  ButtonContainer,
  Card,
  InfoArea,
  Thumbnail,
  ThumbnailImg,
} from './VideoCard.components';
import { Button } from '..';
import { useSessionData } from '../../global-context';

const VideoCard = ({ videoItem, asFavorite }) => {
  const history = useHistory();
  const { sessionData } = useSessionData();

  const handleClick = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      history.push(`/video/${videoItem.id.videoId}`);
    }
  };

  const deleteVideo = (e) => {
    console.log('DELETE');
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
      {sessionData.isLoggedIn && (
        <ButtonContainer className="btn-container">
          {asFavorite ? (
            <Button width="120px" danger onClick={deleteVideo}>
              Remove
            </Button>
          ) : (
            <Button width="180px" primary>
              Add to favorites
            </Button>
          )}
        </ButtonContainer>
      )}
    </Card>
  );
};

export default VideoCard;
