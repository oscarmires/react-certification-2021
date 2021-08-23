import React from 'react';

import { Button } from '../..';
import { useActiveDropdown, useSessionData } from '../../../global-context';
import { UserMenuButtons, UserMenuContainer } from './UserMenu.components';

function UserMenu() {
  const { sessionData, dispatchSessionData } = useSessionData();
  const { setActiveDropdown } = useActiveDropdown();

  const logOut = (e) => {
    dispatchSessionData({ type: 'logout' });
    setActiveDropdown('');
  };

  return (
    <UserMenuContainer>
      <span>{sessionData.name}</span>
      <UserMenuButtons>
        <Button className="user-left-btn">Account</Button>
        <Button danger onClick={logOut}>
          Log out
        </Button>
      </UserMenuButtons>
    </UserMenuContainer>
  );
}

export default UserMenu;
