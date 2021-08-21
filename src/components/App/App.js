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
  IsClientLoadedProvider,
} from '../../global-context';
import { Switch, Route } from 'react-router';

function App() {
  const [YouTubeData, setYouTubeData] = useState(items);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState('');

  const { themeState, dispatchThemeState } = useThemeState();

  useEffect(() => {
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

  return (
    <IsClientLoadedProvider>
      <ThemeProvider theme={themeState.theme}>
        <GlobalStyles />
        <SearchKeywordProvider>
          <Navbar updateVideos={updateVideos} setCurrentPage={setCurrentPage} />
          <SelectedVideoProvider>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <HomePage
                    {...props}
                    YouTubeData={YouTubeData}
                    setCurrentPage={setCurrentPage}
                    setRelatedVideos={setRelatedVideos}
                    fetchRelatedVideos={fetchRelatedVideos}
                  />
                )}
              />
              <Switch>
                <Route
                  exact
                  path="/video/:videoId"
                  render={(props) => (
                    <VideoDetailsPage
                      {...props}
                      setCurrentPage={setCurrentPage}
                      relatedVideos={relatedVideos}
                      setRelatedVideos={setRelatedVideos}
                    />
                  )}
                />
              </Switch>
            </Switch>
          </SelectedVideoProvider>
        </SearchKeywordProvider>
      </ThemeProvider>
    </IsClientLoadedProvider>
  );
}

export default App;
