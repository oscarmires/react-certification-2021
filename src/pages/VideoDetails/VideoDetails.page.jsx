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
import { useSelectedVideo } from '../../global-context';

const VideoDetailsPage = ({
  setCurrentPage,
  relatedVideos,
  fetchRelatedVideos,
  match,
}) => {
  const { selectedVideo, setSelectedVideo } = useSelectedVideo();

  YouTube.useYouTubePlayer(match.params.videoId);

  // discard videos that don't have 'snippet' attribute
  const filteredRelatedVideos = relatedVideos.filter((video) => video.snippet != null);

  const videoListElements = filteredRelatedVideos.map((video) => (
    <VideoListElement
      key={video.etag}
      videoItem={video}
      setCurrentPage={setCurrentPage}
      fetchRelatedVideos={fetchRelatedVideos}
    />
  ));

  useEffect(() => {
    window.scroll(0, 0);
  });

  useEffect(() => {
    console.log(match.params.videoId);
    async function fetchData() {
      console.log('in fetch data');
      const videoObject = await YouTube.gapiLoadClientAndVideo(match.params.videoId);
      setSelectedVideo(videoObject);
      console.log(selectedVideo);
    }
    fetchData();
  }, [match]);

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
        {videoListElements}
      </VideoList>
    </PageContainer>
  );
};

export default VideoDetailsPage;
