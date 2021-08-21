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
import { useIsClientLoaded, useSelectedVideo } from '../../global-context';

const VideoDetailsPage = ({ setCurrentPage, relatedVideos, setRelatedVideos, match }) => {
  const { selectedVideo, setSelectedVideo } = useSelectedVideo();
  const { isClientLoaded, setIsClientLoaded } = useIsClientLoaded();

  const videoId = match.params.videoId;
  YouTube.useYouTubePlayer(videoId);

  // discard videos that don't have 'snippet' attribute
  const filteredRelatedVideos = relatedVideos.filter((video) => video.snippet != null);

  const videoListElements = filteredRelatedVideos.map((video) => (
    <VideoListElement
      key={video.etag}
      videoItem={video}
      setCurrentPage={setCurrentPage}
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
    };
  }, []);

  useEffect(() => {
    // after GAPI client is loaded
    async function fetchSelectedVideoData(videoId) {
      try {
        const res = await YouTube.getByVideoId(videoId);
        setSelectedVideo(res);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchRelatedVideos(videoId) {
      const relatedVideos = await YouTube.getRelatedVideos(videoId);
      setRelatedVideos(relatedVideos);
    }

    if (isClientLoaded) {
      console.log(isClientLoaded);
      fetchSelectedVideoData(videoId);
      fetchRelatedVideos(videoId);
    }
  }, [isClientLoaded]);

  return (
    <PageContainer>
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
