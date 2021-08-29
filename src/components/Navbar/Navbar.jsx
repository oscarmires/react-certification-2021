import { FormGroup, FormControlLabel, Hidden } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faAdjust } from '@fortawesome/free-solid-svg-icons';

import { SearchBar, ThemeSwitch, AccountPopUp } from '..';
import {
  Header,
  Nav,
  BurgerMenuButton,
  Left,
  Right,
  UserProfileButton,
} from './Navbar.components';
import { useActiveDropdown, useSessionData } from '../../global-context';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Navbar = ({ updateVideos, setCurrentPage }) => {
  const { activeDropdown, setActiveDropdown } = useActiveDropdown();
  const { sessionData } = useSessionData();

  const onUserButtonClick = (e) => {
    if (activeDropdown !== 'account') {
      setActiveDropdown('account');
    } else {
      setActiveDropdown('');
    }
  };

  const onMenuButtonClick = (e) => {
    if (activeDropdown !== 'menu') {
      setActiveDropdown('menu');
    } else {
      setActiveDropdown('');
    }
  };

  return (
    <>
      <Header data-testid="header">
        <Nav>
          <Left>
            <BurgerMenuButton
              onClick={onMenuButtonClick}
              id="menu-button"
              data-testid="menu-button"
            >
              <FontAwesomeIcon icon={faBars} size="2x" color="white" />
            </BurgerMenuButton>
            <SearchBar
              data-testid="search-bar"
              updateVideos={updateVideos}
              setCurrentPage={setCurrentPage}
            />
          </Left>
          <Right>
            <Hidden xsDown>
              <FormGroup>
                <FormControlLabel
                  control={<ThemeSwitch />}
                  label={<FontAwesomeIcon icon={faAdjust}></FontAwesomeIcon>}
                  style={{ color: 'white' }}
                />
              </FormGroup>
            </Hidden>
            <UserProfileButton
              id="profile-button"
              data-testid="profile-button"
              onClick={onUserButtonClick}
            >
              {sessionData.isLoggedIn ? (
                <img src={sessionData.avatarUrl} alt="User avatar" />
              ) : (
                <FontAwesomeIcon icon={faUser} size="2x" color="#333" />
              )}
            </UserProfileButton>
          </Right>
        </Nav>
      </Header>
      <DropdownMenu />
      <AccountPopUp id="account-pop-up" />
    </>
  );
};

export default Navbar;
