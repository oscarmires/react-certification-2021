import React from 'react';

import {
  PlayerAndInfo,
  PageContainer,
  VideoInfoArea,
  VideoList,
  VideoPlayer,
} from './VideoDetails.components';

import { VideoListElement } from '../../components';
import { useYouTubePlayer } from '../../util/YouTube';
import { useEffect } from 'react';

const VideoDetailsPage = ({
  YouTubeData,
  selectedVideoIndex,
  changePage,
  searchKeyword,
}) => {
  const selectedVideo = YouTubeData[selectedVideoIndex];

  useYouTubePlayer(selectedVideo.id.videoId);

  useEffect(() => {
    window.scroll(0, 0);
  });

  const videoListElements = YouTubeData.map((video, index) => (
    <VideoListElement
      key={video.etag}
      videoItem={video}
      index={index}
      changePage={changePage}
    />
  ));

  return (
    <PageContainer>
      <PlayerAndInfo>
        <VideoPlayer id="video-player">
          <div id="player" data-testid="video-player"></div>
        </VideoPlayer>
        <VideoInfoArea>
          <h1>{selectedVideo.snippet.title}</h1>
          <p>{selectedVideo.snippet.description}</p>
        </VideoInfoArea>
      </PlayerAndInfo>
      <VideoList>
        <h2>Resultados para "{searchKeyword}"</h2>
        {videoListElements}
      </VideoList>
    </PageContainer>
  );
};

export default VideoDetailsPage;
