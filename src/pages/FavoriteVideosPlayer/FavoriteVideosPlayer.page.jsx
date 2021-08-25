import React from 'react';
import { useEffect } from 'react';

import {
  PlayerAndInfo,
  PageContainer,
  VideoInfoArea,
  VideoList,
  VideoPlayer,
} from './FavoriteVideosPlayer.components';

import { Button, VideoListElement } from '../../components';
import YouTube from '../../util/YouTube';
import {
  useActiveDropdown,
  useSelectedVideo,
  useSessionData,
} from '../../global-context';

const FavoriteVideosPlayerPage = ({ match }) => {
  const { selectedVideo, setSelectedVideo } = useSelectedVideo();
  const { setActiveDropdown } = useActiveDropdown();
  const { sessionData, dispatchSessionData } = useSessionData();

  const videoId = match.params.videoId;
  YouTube.useYouTubePlayer(videoId);

  useEffect(() => {
    changeVideo(videoId);
    return () => {
      setSelectedVideo({});
    };
    // eslint-disable-next-line
  }, [match]);

  const changeVideo = (videoId) => {
    setSelectedVideo(
      sessionData.favoriteVideos.find((video) => video.id.videoId === videoId)
    );
  };

  const closeDropdowns = (e) => {
    if (e.target.id !== 'add-favorite-btn') {
      setActiveDropdown('');
    }
  };

  const removeVideo = (e) => {
    dispatchSessionData({ type: 'deleteSavedVideo', value: selectedVideo });
  };

  const addVideo = (e) => {
    setActiveDropdown('');
    if (sessionData.isLoggedIn) {
      dispatchSessionData({ type: 'saveVideo', value: selectedVideo });
    } else {
      alert('Please log in to save favorite videos');
      setActiveDropdown('account');
    }
  };

  const checkIsFavorite = (videoId) => {
    return sessionData.favoriteVideos.some((video) => video.id.videoId === videoId);
  };

  const videoListElements = sessionData.favoriteVideos.map((video) => (
    <VideoListElement
      key={video.etag}
      videoItem={video}
      onClick={() => changeVideo(videoId)}
    />
  ));

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <PageContainer data-testid="video-details-page" onClick={closeDropdowns}>
      <PlayerAndInfo>
        <VideoPlayer>
          <div id="player" data-testid="video-player"></div>
        </VideoPlayer>
        <VideoInfoArea>
          <h1>{selectedVideo.snippet && selectedVideo.snippet.title}</h1>
          {sessionData.isLoggedIn &&
            (checkIsFavorite(videoId) ? (
              <Button danger onClick={removeVideo}>
                Remove from favorites
              </Button>
            ) : (
              <Button primary onClick={addVideo} id="add-favorite-btn">
                Add to favorites
              </Button>
            ))}
          <p>{selectedVideo.snippet && selectedVideo.snippet.description}</p>
        </VideoInfoArea>
      </PlayerAndInfo>
      <VideoList id="related-videos-list">
        <h2>Favorite videos</h2>
        {selectedVideo.snippet && videoListElements}
      </VideoList>
    </PageContainer>
  );
};

export default FavoriteVideosPlayerPage;
