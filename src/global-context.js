import React, { useState, useContext, useReducer } from 'react';

import { lightTheme, darkTheme } from './themes';

/**
 * Selected video context
 */

const SelectedVideoContext = React.createContext();

function SelectedVideoProvider({ children }) {
  const [selectedVideo, setSelectedVideo] = useState({});

  const value = { selectedVideo, setSelectedVideo };
  return (
    <SelectedVideoContext.Provider value={value}>
      {children}
    </SelectedVideoContext.Provider>
  );
}

function useSelectedVideo() {
  const context = useContext(SelectedVideoContext);
  if (context === undefined) {
    throw new Error('useSelectedVideo must be used within a SelectedVideoProvider');
  }
  return context;
}

/**
 * Search keyword context
 */

const SearchKeywordContext = React.createContext();

function SearchKeywordProvider({ children }) {
  const [searchKeyword, setSearchKeyword] = useState('Wizeline');

  const value = { searchKeyword, setSearchKeyword };

  return (
    <SearchKeywordContext.Provider value={value}>
      {children}
    </SearchKeywordContext.Provider>
  );
}

function useSearchKeyword() {
  const context = useContext(SearchKeywordContext);
  if (context === undefined) {
    throw new Error(
      `useSearchKeyword must be used within a SearchKeywordProvider (context is <<${context}>>)`
    );
  }
  return context;
}

/**
 * Theme state context
 */

const ThemeStateContext = React.createContext();

function themeStateReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      localStorage.setItem('darkThemeEnabled', !state.isDark);
      const nextIsDark = !state.isDark;
      return {
        theme: nextIsDark ? darkTheme : lightTheme,
        isDark: nextIsDark,
      };
    case 'load':
      let isDark = localStorage.getItem('darkThemeEnabled');
      if (!isDark) {
        localStorage.setItem('darkThemeEnabled', false);
        isDark = 'false';
      }
      isDark = isDark === 'true';
      return { ...state, theme: isDark ? darkTheme : lightTheme, isDark: isDark };
    default:
      break;
  }
}

function ThemeStateProvider({ children }) {
  const [themeState, dispatchThemeState] = useReducer(themeStateReducer, {
    theme: lightTheme,
    isDark: false,
  });
  const value = { themeState, dispatchThemeState };

  return (
    <ThemeStateContext.Provider value={value}>{children}</ThemeStateContext.Provider>
  );
}

function useThemeState() {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error(
      `useThemeState must be used within a ThemeStateProvider (context is <<${context}>>)`
    );
  }
  return context;
}

/**
 * isClientLoaded context
 */

const IsClientLoadedContext = React.createContext();

function IsClientLoadedProvider({ children }) {
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  const value = { isClientLoaded, setIsClientLoaded };

  return (
    <IsClientLoadedContext.Provider value={value}>
      {children}
    </IsClientLoadedContext.Provider>
  );
}

function useIsClientLoaded() {
  const context = useContext(IsClientLoadedContext);
  if (context === undefined) {
    throw new Error(
      `useIsClientLoaded must be used within a IsClientLoadedProvider (context is <<${context}>>)`
    );
  }
  return context;
}

/**
 * Session data
 *
 * isLoggedIn, favoriteVideos, name, id
 */

const SessionDataContext = React.createContext();

function sessionDataReducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isLoggedIn: true,
        id: action.apiUser.id,
        name: action.apiUser.name,
        favoriteVideos: [],
      };
    case 'logout':
      const favoriteVideosIdArr = state.favoriteVideos.map((video) => video.id.videoId);
      const userDataObj = {
        favoriteVideosIdArr: favoriteVideosIdArr,
      };
      const key = `WizReactChalUsr${state.id}`;
      window.localStorage.setItem(key, JSON.stringify(userDataObj));
      return {
        ...state,
        isLoggedIn: false,
        id: '',
        name: '',
        favoriteVideos: [],
      };
    case 'saveVideo':
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.push(action.value),
      };
    case 'setFavoriteVideos':
      return {
        ...state,
        favoriteVideos: action.value,
      };
    case 'deleteSavedVideo':
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter(
          (video) => video.id.videoId !== action.value
        ),
      };
    default:
      break;
  }
}

function SessionDataProvider({ children }) {
  const [sessionData, dispatchSessionData] = useReducer(sessionDataReducer, {
    isLoggedIn: false,
    id: '',
    name: '',
    favoriteVideos: [],
  });
  const value = { sessionData, dispatchSessionData };

  return (
    <SessionDataContext.Provider value={value}>{children}</SessionDataContext.Provider>
  );
}

function useSessionData() {
  const context = useContext(SessionDataContext);
  if (context === undefined) {
    throw new Error(
      `useSessionData must be used within a SessionDataProvider (context is <<${context}>>)`
    );
  }
  return context;
}

/**
 * Active dropdown
 */
const ActiveDropdownContext = React.createContext();

function ActiveDropdownProvider({ children }) {
  const [activeDropdown, setActiveDropdown] = useState('');

  const value = { activeDropdown, setActiveDropdown };

  return (
    <ActiveDropdownContext.Provider value={value}>
      {children}
    </ActiveDropdownContext.Provider>
  );
}

function useActiveDropdown() {
  const context = useContext(ActiveDropdownContext);
  if (context === undefined) {
    throw new Error(
      `useActiveDropdown must be used within a ActiveDropdownProvider (context is <<${context}>>)`
    );
  }
  return context;
}

export {
  SelectedVideoProvider,
  useSelectedVideo,
  SearchKeywordProvider,
  useSearchKeyword,
  ThemeStateProvider,
  useThemeState,
  IsClientLoadedProvider,
  useIsClientLoaded,
  SessionDataProvider,
  useSessionData,
  ActiveDropdownProvider,
  useActiveDropdown,
};
