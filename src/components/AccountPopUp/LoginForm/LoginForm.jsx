import React, { useState } from 'react';

import { FormContainer, FormInput } from './LoginForm.components';
import { Button } from '../..';
import loginApi from '../../../util/login.api';
import { useActiveDropdown, useSessionData } from '../../../global-context';
import YouTube from '../../../util/YouTube';

function LoginForm() {
  const [usernameVal, setUsernameVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const { dispatchSessionData } = useSessionData();
  const { setActiveDropdown } = useActiveDropdown();

  const onUsernameChange = (e) => {
    setUsernameVal(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPasswordVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginApi(usernameVal, passwordVal);
      const key = `WizReactChalUsr${user.id}`;
      const favoriteVideosIdText = window.localStorage.getItem(key);
      dispatchSessionData({ type: 'login', apiUser: user });

      const favoriteVideosIdArr = favoriteVideosIdText
        ? JSON.parse(favoriteVideosIdText).favoriteVideosIdArr
        : [];

      const favoriteVideos = [];
      let videoItem = {};
      let videoId = '';

      for (let i = 0; i < favoriteVideosIdArr.length; i++) {
        videoId = favoriteVideosIdArr[i];
        try {
          videoItem = await YouTube.getByVideoId(videoId);
          favoriteVideos.push(videoItem);
        } catch (error) {
          console.log(error);
          videoItem = {
            id: { videoId: videoId },
            snippet: { title: 'Video not found', description: '' },
          };
        }
      }

      dispatchSessionData({ type: 'setFavoriteVideos', value: favoriteVideos });
      setActiveDropdown('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <span>Account</span>
      <FormInput
        type="text"
        name="username"
        placeholder="Username"
        onChange={onUsernameChange}
        value={usernameVal}
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        onChange={onPasswordChange}
        value={passwordVal}
      />
      <Button type="submit" onSubmit={handleSubmit} onClick={handleSubmit} primary>
        Log in
      </Button>
    </FormContainer>
  );
}

export default LoginForm;
