import React from 'react';
import { SearchResultsGrid } from '../../components';
import { HomeArea } from './Home.components';

function HomePage({ searchKeyword, YouTubeData, setCurrentPage, fetchRelatedVideos }) {
  return (
    <>
      <HomeArea>
        <h1>React Challenge</h1>
        <SearchResultsGrid
          resultItems={YouTubeData}
          setCurrentPage={setCurrentPage}
          fetchRelatedVideos={fetchRelatedVideos}
        />
      </HomeArea>
    </>
  );
}

export default HomePage;
