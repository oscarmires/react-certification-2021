import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControlLabel } from '@material-ui/core';

import { ThemeSwitch } from '..';

import {
  DropdownMenuContainer,
  MenuItem,
  MenuSpecialItem,
  MenuText,
  Section,
} from './DropdownMenu.components';
import { useActiveDropdown, useSessionData } from '../../global-context';
import { useHistory } from 'react-router';

function DropdownMenu() {
  const { sessionData, dispatchSessionData } = useSessionData();
  const { activeDropdown, setActiveDropdown } = useActiveDropdown();
  const history = useHistory();

  const [displayVal, setdisplayVal] = useState('false');

  useEffect(() => {
    setdisplayVal(activeDropdown === 'menu' ? 'flex' : 'none');
    return () => {
      setdisplayVal('none');
    };
  }, [activeDropdown]);

  const logOut = (e) => {
    dispatchSessionData({ type: 'logout' });
    setActiveDropdown('');
  };

  const showLogIn = (e) => {
    setActiveDropdown('account');
  };

  const goHome = (e) => {
    history.push('/');
    setActiveDropdown('');
  };

  return (
    <DropdownMenuContainer style={{ display: displayVal }}>
      <MenuText>Site navigation</MenuText>
      <Section id="site-navigation">
        <MenuItem onClick={goHome}>Home</MenuItem>
        {sessionData.isLoggedIn && <MenuItem>Favorite videos</MenuItem>}
      </Section>
      <MenuText>Site preferences</MenuText>
      <Section id="site-preferences">
        <MenuSpecialItem>
          <FormGroup>
            <FormControlLabel control={<ThemeSwitch />} label="Dark mode" />
          </FormGroup>
        </MenuSpecialItem>

        {sessionData.isLoggedIn ? (
          <MenuItem onClick={logOut}>
            Log out&nbsp;&nbsp;
            <FontAwesomeIcon icon={faSignOutAlt} color="#333" />
          </MenuItem>
        ) : (
          <MenuItem onClick={showLogIn}>
            Log in&nbsp;&nbsp; <FontAwesomeIcon icon={faSignInAlt} color="#333" />
          </MenuItem>
        )}
      </Section>
    </DropdownMenuContainer>
  );
}

export default DropdownMenu;
