import React from 'react';
import { Navbar, SearchResultsGrid } from '../../components';
import { HomeArea } from './Home.components';

function HomePage({
  handleTheme,
  updateSearchKeyword,
  searchKeyword,
  YouTubeData,
  updateVideos,
}) {
  return (
    <>
      <Navbar
        data-testid="navbar"
        handleTheme={handleTheme}
        updateVideos={updateVideos}
        updateSearchKeyword={updateSearchKeyword}
      />
      <HomeArea>
        <h1>React Challenge</h1>
        <SearchResultsGrid resultItems={YouTubeData} searchKeyword={searchKeyword} />
      </HomeArea>
    </>
  );
}

export default HomePage;
