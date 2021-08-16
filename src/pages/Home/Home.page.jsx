import React from 'react';
import { SearchResultsGrid } from '../../components';
import { HomeArea } from './Home.components';

function HomePage({
  searchKeyword,
  YouTubeData,
  setCurrentPage,
  setSelectedVideoIndex,
  fetchRelatedVideos,
  setSelectedVideo,
}) {
  return (
    <>
      <HomeArea>
        <h1>React Challenge</h1>
        <SearchResultsGrid
          resultItems={YouTubeData}
          searchKeyword={searchKeyword}
          setCurrentPage={setCurrentPage}
          setSelectedVideoIndex={setSelectedVideoIndex}
          fetchRelatedVideos={fetchRelatedVideos}
          setSelectedVideo={setSelectedVideo}
        />
      </HomeArea>
    </>
  );
}

export default HomePage;
