import { FormGroup, FormControlLabel, Hidden } from '@material-ui/core';
import React from 'react';
import { SearchBar, ThemeSwitch } from '../index';
import {
  Nav,
  BurgerMenuButton,
  Left,
  Right,
  UserProfileButton,
} from './Navbar.components';

const Navbar = ({
  darkThemeEnabled,
  toggleTheme,
  updateVideos,
  setCurrentPage,
  updateSearchKeyword,
}) => {
  return (
    <header style={{ position: 'fixed', width: '100%', zIndex: 1 }} data-testid="header">
      <Nav>
        <Left>
          <BurgerMenuButton />
          <SearchBar
            data-testid="search-bar"
            updateVideos={updateVideos}
            setCurrentPage={setCurrentPage}
            updateSearchKeyword={updateSearchKeyword}
          />
        </Left>
        <Right>
          <Hidden xsDown>
            <FormGroup>
              <FormControlLabel
                control={
                  <ThemeSwitch
                    toggleTheme={toggleTheme}
                    darkThemeEnabled={darkThemeEnabled}
                  />
                }
                label="Dark mode"
                style={{ color: 'white' }}
              />
            </FormGroup>
          </Hidden>
          <UserProfileButton>
            <i className="fas fa-user fa-2x" style={{ color: '#333' }}></i>
          </UserProfileButton>
        </Right>
      </Nav>
    </header>
  );
};

export default Navbar;
