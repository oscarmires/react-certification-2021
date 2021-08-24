import React, { useState } from 'react';

import { FormContainer, FormInput } from './LoginForm.components';
import { Button } from '../..';
import loginApi from '../../../util/login.api';
import { useActiveDropdown, useSessionData } from '../../../global-context';

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
      dispatchSessionData({ type: 'login', apiUser: user });

      const favoriteVideosText = window.localStorage.getItem(key);
      const favoriteVideos = favoriteVideosText
        ? JSON.parse(favoriteVideosText).favoriteVideos
        : [];

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
