/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../themes';
import {
  HomePage,
  NotFound,
  ProfilePage,
  VideoDetailsPage,
  FavoriteVideosPlayerPage,
} from '../../pages';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { Navbar } from '../../components';
import {
  SelectedVideoProvider,
  SearchKeywordProvider,
  useThemeState,
  IsClientLoadedProvider,
  ActiveDropdownProvider,
  useSessionData,
} from '../../global-context';
import { Switch, Route, Redirect } from 'react-router';

function App() {
  const [YouTubeData, setYouTubeData] = useState(items);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { themeState, dispatchThemeState } = useThemeState();
  const { sessionData } = useSessionData();

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
          <ActiveDropdownProvider>
            <Navbar updateVideos={updateVideos} />
            <SelectedVideoProvider>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <HomePage {...props} YouTubeData={YouTubeData} />}
                />
                <Redirect exact from="/video" to="/" />
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
                <Route
                  exact
                  path="/account"
                  render={(props) => <ProfilePage {...props} />}
                />
                <Redirect exact from="/account/favorite-videos-player" to="/account" />
                <Route
                  path="/account/favorite-videos-player/:videoId"
                  render={(props) => {
                    if (sessionData.favoriteVideos.length > 0 && sessionData.isLoggedIn) {
                      return <FavoriteVideosPlayerPage {...props} />;
                    } else {
                      return <Redirect to="/account" />;
                    }
                  }}
                />
                <Route component={NotFound} />
              </Switch>
            </SelectedVideoProvider>
          </ActiveDropdownProvider>
        </SearchKeywordProvider>
      </ThemeProvider>
    </IsClientLoadedProvider>
  );
}

export default App;
