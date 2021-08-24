import React, { useEffect } from 'react';

import {
  AccountInfoArea,
  FavoriteVideosGrid,
  ProfilePageContainer,
} from './Profile.components';
import YouTube from '../../util/YouTube';
import { useIsClientLoaded } from '../../global-context';
import { items } from '../../mock_data/youtube-videos-mock.json';
import { VideoCard } from '../../components';

function ProfilePage() {
  const { setIsClientLoaded } = useIsClientLoaded();

  useEffect(() => {
    // set Google API
    YouTube.gapiLoadClient(setIsClientLoaded);

    return () => {
      setIsClientLoaded(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <ProfilePageContainer data-testid="profile-page">
      <h1>Account</h1>
      <AccountInfoArea>
        <h2>[Name]</h2>
        <p>Username: [username]</p>
        <p>Id: [id]</p>
        <p>Password: [password]</p>
      </AccountInfoArea>
      <FavoriteVideosGrid>
        <h2>Favorite videos</h2>
        {items.map((item) => (
          <VideoCard videoItem={item} asFavorite></VideoCard>
        ))}
      </FavoriteVideosGrid>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
