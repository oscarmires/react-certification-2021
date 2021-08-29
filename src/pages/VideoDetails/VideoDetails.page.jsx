import React from 'react';
import { useEffect } from 'react';

import {
  PlayerAndInfo,
  PageContainer,
  VideoInfoArea,
  VideoList,
  VideoPlayer,
} from './VideoDetails.components';

import { Button, VideoListElement } from '../../components';
import YouTube from '../../util/YouTube';
import {
  useActiveDropdown,
  useIsClientLoaded,
  useSelectedVideo,
  useSessionData,
} from '../../global-context';

const VideoDetailsPage = ({ relatedVideos, setRelatedVideos, match }) => {
  const { selectedVideo, setSelectedVideo } = useSelectedVideo();
  const { isClientLoaded, setIsClientLoaded } = useIsClientLoaded();
  const { setActiveDropdown } = useActiveDropdown();
  const { sessionData, dispatchSessionData } = useSessionData();

  const videoId = match.params.videoId;
  YouTube.useYouTubePlayer(videoId);

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

  const fetchSelectedVideoData = async function (videoId) {
    try {
      const res = await YouTube.getByVideoId(videoId);
      const video = {
        id: {
          videoId: videoId,
        },
        etag: res.etag,
        snippet: res.snippet,
      };
      setSelectedVideo(video);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRelatedVideos = async function (videoId) {
    try {
      const relatedVideos = await YouTube.getRelatedVideos(videoId);
      setRelatedVideos(relatedVideos);
    } catch (error) {
      console.error(error);
    }
  };

  const updateRelatedData = function (videoId) {
    fetchSelectedVideoData(videoId);
    fetchRelatedVideos(videoId);
  };

  // discard videos that don't have 'snippet' attribute
  const filteredRelatedVideos = relatedVideos.filter((video) => video.snippet != null);

  const videoListElements = filteredRelatedVideos.map((video) => (
    <VideoListElement
      key={video.etag}
      videoItem={video}
      updateRelatedData={updateRelatedData}
    />
  ));

  useEffect(() => {
    window.scroll(0, 0);
  });

  useEffect(() => {
    // set Google API
    YouTube.gapiLoadClient(setIsClientLoaded);

    return () => {
      setIsClientLoaded(false);
      setRelatedVideos([]);
      setSelectedVideo({});
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // after GAPI client is loaded
    if (isClientLoaded) {
      updateRelatedData(videoId);
    }
    // eslint-disable-next-line
  }, [isClientLoaded]);

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
              <Button danger onClick={removeVideo} data-testid="noFavoriteBtn">
                Remove from favorites
              </Button>
            ) : (
              <Button
                primary
                onClick={addVideo}
                id="add-favorite-btn"
                data-testid="makeFavoriteBtn"
              >
                Add to favorites
              </Button>
            ))}
          <p>{selectedVideo.snippet && selectedVideo.snippet.description}</p>
        </VideoInfoArea>
      </PlayerAndInfo>
      <VideoList id="related-videos-list">
        <h2>Related videos</h2>
        {selectedVideo.snippet && videoListElements}
      </VideoList>
    </PageContainer>
  );
};

export default VideoDetailsPage;
