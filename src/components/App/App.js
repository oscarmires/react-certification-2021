/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from '../../themes';
import HomePage from '../../pages/Home/Home.page';
import { gapiLoadClient } from '../../util/YouTube';
import { items } from '../../mock/youtube-videos-mock.json';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [YouTubeData, setYouTubeData] = useState(items);

  useEffect(gapiLoadClient);

  const enableDarkTheme = (isDarkThemeEnabled) => {
    isDarkThemeEnabled ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  const updateSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
  };

  const updateVideos = (searchResults) => setYouTubeData(searchResults);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomePage
          handleTheme={enableDarkTheme}
          updateSearchKeyword={updateSearchKeyword}
          searchKeyword={searchKeyword}
          YouTubeData={YouTubeData}
          updateVideos={updateVideos}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
