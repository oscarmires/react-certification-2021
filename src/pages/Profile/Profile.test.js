import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithContext, renderWithRouter } from '../../util/testUtil';
import { ThemeProvider } from 'styled-components';

import ProfilePage from './Profile.page';
import {
  ActiveDropdownProvider,
  IsClientLoadedProvider,
  SessionDataProvider,
  SearchKeywordProvider,
  ThemeStateProvider,
} from '../../global-context';
import { Navbar } from '../../components';
import { lightTheme } from '../../themes';
import { items } from '../../mock_data/youtube-videos-mock.json';

jest.mock('../../util/YouTube');

describe('ProfilePage', () => {
  beforeEach(() => {
    renderWithContext(<ProfilePage />);
  });
  it('renders a title with text "Account"', () => {
    const title = screen.getByText('Account');
    expect(title).toBeInTheDocument();
  });

  it('renders a page container element', () => {
    const container = screen.getByTestId('profile-page');
    expect(container).toBeInTheDocument();
  });
});

describe('ProfilePage no login', () => {
  beforeEach(() => {
    renderWithRouter(
      <IsClientLoadedProvider>
        <SessionDataProvider>
          <ActiveDropdownProvider>
            <ThemeStateProvider>
              <ThemeProvider theme={lightTheme}>
                <SearchKeywordProvider>
                  <Navbar />
                </SearchKeywordProvider>
              </ThemeProvider>
            </ThemeStateProvider>
            <ProfilePage />
          </ActiveDropdownProvider>
        </SessionDataProvider>
      </IsClientLoadedProvider>
    );
  });

  it('displays login message when user is not logged in', () => {
    const loginMessage = screen.getByTestId('login-message');

    expect(loginMessage).toBeInTheDocument();
  });

  it('displays login form on login message click', () => {
    const loginMessage = screen.getByTestId('login-message');
    const form = screen.getByTestId('accountPopUp');

    fireEvent.click(loginMessage);

    const style = window.getComputedStyle(form);

    expect(style.display).toBe('flex');
  });
});

describe('ProfilePage login', () => {
  beforeEach(() => {
    renderWithRouter(
      <IsClientLoadedProvider>
        <SessionDataProvider mockLogIn mockFavorite={items[0]}>
          <ActiveDropdownProvider>
            <ThemeStateProvider>
              <ThemeProvider theme={lightTheme}>
                <SearchKeywordProvider>
                  <Navbar />
                </SearchKeywordProvider>
              </ThemeProvider>
            </ThemeStateProvider>
            <ProfilePage />
          </ActiveDropdownProvider>
        </SessionDataProvider>
      </IsClientLoadedProvider>
    );
  });

  it('displays "Favorite videos" grid area', () => {
    const favoriteVideosGrid = screen.getByTestId('favorite-videos-grid');

    expect(favoriteVideosGrid).toBeInTheDocument();
  });

  it('displays a video card when there is at least one favorite video', () => {
    const videoCard = screen.getByTestId('card-div');

    expect(videoCard).toBeInTheDocument();
  });
});
