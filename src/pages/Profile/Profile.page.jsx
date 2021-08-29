import React, { useEffect } from 'react';

import {
  AccountInfoArea,
  DefaultArea,
  LoginMessage,
  FavoriteVideosGrid,
  ProfilePageContainer,
} from './Profile.components';
import YouTube from '../../util/YouTube';
import {
  useIsClientLoaded,
  useActiveDropdown,
  useSessionData,
} from '../../global-context';
import { VideoCard } from '../../components';

function ProfilePage() {
  const { setIsClientLoaded } = useIsClientLoaded();
  const { setActiveDropdown } = useActiveDropdown();
  const { sessionData } = useSessionData();

  const closeDropdowns = (e) => {
    if (e.target.id !== 'login-message') setActiveDropdown('');
  };

  const showLogIn = (e) => {
    setActiveDropdown('account');
  };

  useEffect(() => {
    // set Google API
    YouTube.gapiLoadClient(setIsClientLoaded);

    return () => {
      setIsClientLoaded(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <ProfilePageContainer data-testid="profile-page" onClick={closeDropdowns}>
      <h1>Account</h1>
      {sessionData.isLoggedIn ? (
        <>
          {' '}
          <AccountInfoArea>
            <h2>{sessionData.name}</h2>
            <p>Id: {sessionData.id}</p>
            <p>
              Avatar url: <a href={sessionData.avatarUrl}>Link</a>
            </p>
          </AccountInfoArea>
          <FavoriteVideosGrid data-testid="favorite-videos-grid">
            <h2>Favorite videos</h2>
            {sessionData.favoriteVideos.length > 0 ? (
              sessionData.favoriteVideos.map((item) => (
                <VideoCard videoItem={item} key={item.etag} asFavorite></VideoCard>
              ))
            ) : (
              <p>You don't have favorite videos</p>
            )}
          </FavoriteVideosGrid>
        </>
      ) : (
        <DefaultArea>
          <LoginMessage
            onClick={showLogIn}
            id="login-message"
            data-testid="login-message"
          >
            <span style={{ textDecoration: 'underline' }}>Log in</span> to enter this
            page.
          </LoginMessage>
        </DefaultArea>
      )}
    </ProfilePageContainer>
  );
}

export default ProfilePage;
