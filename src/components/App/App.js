/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from '../../themes';
import { HomePage, VideoDetailsPage } from '../../pages';
import YouTube from '../../util/YouTube';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { Navbar } from '../../components';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('Wizeline');
  const [YouTubeData, setYouTubeData] = useState(items);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState('');
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  useEffect(() => {
    // set Google API
    YouTube.gapiLoadClient();

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
    darkThemeEnabled ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [darkThemeEnabled]);

  const toggleTheme = () => {
    const isDark = !darkThemeEnabled;
    setDarkThemeEnabled(isDark);
    localStorage.setItem('darkThemeEnabled', isDark);
  };

  const updateVideos = (searchResults) => setYouTubeData(searchResults);

  const fetchRelatedVideos = async (videoId) => {
    const relatedVideos = await YouTube.getRelatedVideos(videoId);
    setRelatedVideos(relatedVideos);
    console.log('FETCH');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'VideoDetails':
        return (
          <VideoDetailsPage
            YouTubeData={YouTubeData}
            selectedVideoIndex={selectedVideoIndex}
            setCurrentPage={setCurrentPage}
            relatedVideos={relatedVideos}
            fetchRelatedVideos={fetchRelatedVideos}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        );
      default:
        return (
          <HomePage
            searchKeyword={searchKeyword}
            YouTubeData={YouTubeData}
            setCurrentPage={setCurrentPage}
            setSelectedVideoIndex={setSelectedVideoIndex}
            setRelatedVideos={setRelatedVideos}
            fetchRelatedVideos={fetchRelatedVideos}
            setSelectedVideo={setSelectedVideo}
          />
        );
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar
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
