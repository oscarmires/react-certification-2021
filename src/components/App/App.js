/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from '../../themes';
import { HomePage, VideoDetailsPage } from '../../pages';
import { gapiLoadClient } from '../../util/YouTube';
import { items } from '../../mock/youtube-videos-mock.json';
import { Navbar } from '../../components';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('Wizeline');
  const [YouTubeData, setYouTubeData] = useState(items);
  const [currentPage, setCurrentPage] = useState('');
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  useEffect(() => {
    // set Google API
    gapiLoadClient();
  }, []);

  useEffect(() => {
    // retrieve theme from storage
    const isDark = localStorage.getItem('darkThemeEnabled');
    if (isDark) {
      setDarkThemeEnabled(isDark === 'true');
    } else {
      localStorage.setItem('darkThemeEnabled', false);
    }
  }, []);

  useEffect(() => {
    // toggle theme
    if (darkThemeEnabled) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [darkThemeEnabled]);

  const toggleTheme = () => {
    const isDark = !darkThemeEnabled;
    setDarkThemeEnabled(isDark);
    localStorage.setItem('darkThemeEnabled', isDark);
  };

  const updateVideos = (searchResults) => setYouTubeData(searchResults);

  const changePage = (page, index) => {
    setCurrentPage(page);
    setSelectedVideoIndex(index);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'VideoDetails':
        return (
          <VideoDetailsPage
            YouTubeData={YouTubeData}
            selectedVideoIndex={selectedVideoIndex}
            changePage={changePage}
            searchKeyword={searchKeyword}
          />
        );
      default:
        return (
          <HomePage
            searchKeyword={searchKeyword}
            YouTubeData={YouTubeData}
            setCurrentPage={setCurrentPage}
            setSelectedVideoIndex={setSelectedVideoIndex}
          />
        );
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar
          data-testid="navbar"
          darkThemeEnabled={darkThemeEnabled}
          toggleTheme={toggleTheme}
          updateVideos={updateVideos}
          setCurrentPage={setCurrentPage}
          updateSearchKeyword={setSearchKeyword}
        />
        {renderCurrentPage()}
      </ThemeProvider>
    </>
  );
}

export default App;
