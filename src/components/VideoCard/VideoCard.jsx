import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

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
  const { sessionData, dispatchSessionData } = useSessionData();
  const [isFavorite, setIsFavorite] = useState(asFavorite);
  const { path } = useRouteMatch();

  const handleClick = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      switch (path) {
        case '/':
          history.push(`/video/${videoItem.id.videoId}`);
          break;
        case '/account':
          history.push(`/account/favorite-videos-player/${videoItem.id.videoId}`);
          break;
        default:
          history.push('/');
      }
    }
  };

  const removeVideo = (videoItem, e) => {
    dispatchSessionData({ type: 'deleteSavedVideo', value: videoItem });
    setIsFavorite(false);
  };

  const addVideo = (videoItem, e) => {
    dispatchSessionData({ type: 'saveVideo', value: videoItem });
    setIsFavorite(true);
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
          {isFavorite ? (
            <Button width="120px" danger onClick={removeVideo.bind(this, videoItem)}>
              Remove
            </Button>
          ) : (
            <Button width="180px" primary onClick={addVideo.bind(this, videoItem)}>
              Add to favorites
            </Button>
          )}
        </ButtonContainer>
      )}
    </Card>
  );
};

export default VideoCard;
