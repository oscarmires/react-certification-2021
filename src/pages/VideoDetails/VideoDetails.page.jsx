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

const VideoDetailsPage = ({
  setCurrentPage,
  relatedVideos,
  fetchRelatedVideos,
  selectedVideo,
  setSelectedVideo,
}) => {
  YouTube.useYouTubePlayer(selectedVideo.id.videoId);

  // discard videos that don't have 'snippet' attribute
  const filteredRelatedVideos = relatedVideos.filter((video) => video.snippet != null);

  const videoListElements = filteredRelatedVideos.map((video) => (
    <VideoListElement
      key={video.etag}
      videoItem={video}
      setCurrentPage={setCurrentPage}
      fetchRelatedVideos={fetchRelatedVideos}
      setSelectedVideo={setSelectedVideo}
    />
  ));

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <PageContainer>
      <PlayerAndInfo>
        <VideoPlayer>
          <div id="player" data-testid="video-player"></div>
        </VideoPlayer>
        <VideoInfoArea>
          <h1>{selectedVideo.snippet.title}</h1>
          <p>{selectedVideo.snippet.description}</p>
        </VideoInfoArea>
      </PlayerAndInfo>
      <VideoList id="related-videos-list">
        <h2>Related videos</h2>
        {videoListElements}
      </VideoList>
    </PageContainer>
  );
};

export default VideoDetailsPage;
