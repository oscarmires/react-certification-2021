import React, { useEffect, useState } from 'react';
import { useActiveDropdown, useSessionData } from '../../global-context';

import { AccountPopUpContainer } from './AccountPopUp.components';
import LoginForm from './LoginForm/LoginForm';
import UserMenu from './UserMenu/UserMenu';

function AccountPopUp() {
  const { activeDropdown } = useActiveDropdown();
  const [displayVal, setdisplayVal] = useState('false');

  const { sessionData } = useSessionData();

  useEffect(() => {
    setdisplayVal(activeDropdown === 'account' ? 'flex' : 'none');
    return () => {
      setdisplayVal('none');
    };
  }, [activeDropdown]);

  return (
    <AccountPopUpContainer style={{ display: displayVal }}>
      {sessionData.isLoggedIn ? <UserMenu /> : <LoginForm />}
    </AccountPopUpContainer>
  );
}

export default AccountPopUp;
