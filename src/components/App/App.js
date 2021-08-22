/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../themes';
import { HomePage, NotFound, VideoDetailsPage } from '../../pages';
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

  const { themeState, dispatchThemeState } = useThemeState();

  useEffect(() => {
    // load stored theme setting
    dispatchThemeState({ type: 'load' });
    // eslint-disable-next-line
  }, []);

  const updateVideos = (searchResults) => setYouTubeData(searchResults);

  return (
    <IsClientLoadedProvider>
      <ThemeProvider theme={themeState.theme}>
        <GlobalStyles />
        <SearchKeywordProvider>
          <Navbar updateVideos={updateVideos} />
          <SelectedVideoProvider>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <HomePage {...props} YouTubeData={YouTubeData} />}
              />
              <Route
                exact
                path="/video"
                render={(props) => <HomePage {...props} YouTubeData={YouTubeData} />}
              />
              <Route
                exact
                path="/video/:videoId"
                render={(props) => (
                  <VideoDetailsPage
                    {...props}
                    relatedVideos={relatedVideos}
                    setRelatedVideos={setRelatedVideos}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </SelectedVideoProvider>
        </SearchKeywordProvider>
      </ThemeProvider>
    </IsClientLoadedProvider>
  );
}

export default App;
