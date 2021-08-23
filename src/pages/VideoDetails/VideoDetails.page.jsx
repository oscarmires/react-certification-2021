import React from 'react';
import { useEffect } from 'react';

import {
  PlayerAndInfo,
  PageContainer,
  VideoInfoArea,
  VideoList,
  VideoPlayer,
} from './VideoDetails.components';

import { VideoListElement } from '../../components';
import YouTube from '../../util/YouTube';
import {
  useActiveDropdown,
  useIsClientLoaded,
  useSelectedVideo,
} from '../../global-context';

const VideoDetailsPage = ({ relatedVideos, setRelatedVideos, match }) => {
  const { selectedVideo, setSelectedVideo } = useSelectedVideo();
  const { isClientLoaded, setIsClientLoaded } = useIsClientLoaded();
  const { setActiveDropdown } = useActiveDropdown();

  const videoId = match.params.videoId;
  YouTube.useYouTubePlayer(videoId);

  const closeDropdowns = (e) => {
    setActiveDropdown('');
  };

  const fetchSelectedVideoData = async function (videoId) {
    try {
      const res = await YouTube.getByVideoId(videoId);
      setSelectedVideo(res);
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
