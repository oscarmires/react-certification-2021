import React from 'react';
import { useHistory } from 'react-router';

import { Button } from '../..';
import { useActiveDropdown, useSessionData } from '../../../global-context';
import { UserMenuButtons, UserMenuContainer } from './UserMenu.components';

function UserMenu() {
  const { sessionData, dispatchSessionData } = useSessionData();
  const { setActiveDropdown } = useActiveDropdown();

  const history = useHistory();

  const logOut = (e) => {
    dispatchSessionData({ type: 'logout' });
    setActiveDropdown('');
  };

  const goToAccount = (e) => {
    history.push('/account');
    setActiveDropdown('');
  };

  return (
    <UserMenuContainer>
      <span>{sessionData.name}</span>
      <UserMenuButtons>
        <Button className="user-left-btn" onClick={goToAccount}>
          Account
        </Button>
        <Button danger onClick={logOut}>
          Log out
        </Button>
      </UserMenuButtons>
    </UserMenuContainer>
  );
}

export default UserMenu;
