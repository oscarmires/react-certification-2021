/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../themes';
import { HomePage, VideoDetailsPage } from '../../pages';
import YouTube from '../../util/YouTube';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { Navbar } from '../../components';
import {
  SelectedVideoProvider,
  SearchKeywordProvider,
  useThemeState,
} from '../../global-context';

function App() {
  const [YouTubeData, setYouTubeData] = useState(items);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState('');

  const { themeState, dispatchThemeState } = useThemeState();

  useEffect(() => {
    // set Google API
    YouTube.gapiLoadClient();

    // retrieve theme from storage
    const isDark = localStorage.getItem('darkThemeEnabled');
    if (isDark) {
      // setDarkThemeEnabled(isDark === 'true');
    } else {
      // localStorage.setItem('darkThemeEnabled', false);
    }

    // load stored theme setting
    dispatchThemeState({ type: 'load' });
    // eslint-disable-next-line
  }, []);

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
            setCurrentPage={setCurrentPage}
            relatedVideos={relatedVideos}
            fetchRelatedVideos={fetchRelatedVideos}
          />
        );
      default:
        return (
          <HomePage
            YouTubeData={YouTubeData}
            setCurrentPage={setCurrentPage}
            setRelatedVideos={setRelatedVideos}
            fetchRelatedVideos={fetchRelatedVideos}
          />
        );
    }
  };

  return (
    <>
      <ThemeProvider theme={themeState.theme}>
        <GlobalStyles />
        <SearchKeywordProvider>
          <Navbar updateVideos={updateVideos} setCurrentPage={setCurrentPage} />
          <SelectedVideoProvider>{renderCurrentPage()}</SelectedVideoProvider>
        </SearchKeywordProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
