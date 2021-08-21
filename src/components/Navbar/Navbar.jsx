import { FormGroup, FormControlLabel, Hidden } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

import { SearchBar, ThemeSwitch } from '..';
import {
  Header,
  Nav,
  BurgerMenuButton,
  Left,
  Right,
  UserProfileButton,
} from './Navbar.components';

const Navbar = ({ updateVideos, setCurrentPage }) => {
  return (
    <Header data-testid="header">
      <Nav>
        <Left>
          <BurgerMenuButton
            onClick={() => {
              setCurrentPage('Home');
            }}
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
                label="Dark mode"
                style={{ color: 'white' }}
              />
            </FormGroup>
          </Hidden>
          <UserProfileButton>
            <FontAwesomeIcon icon={faUser} size="2x" color="#333" />
          </UserProfileButton>
        </Right>
      </Nav>
    </Header>
  );
};

export default Navbar;
