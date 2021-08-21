import React, { useState, useContext, useReducer } from 'react';

import { lightTheme, darkTheme } from './themes';
import { items } from './mock_data/youtube-videos-mock.json';

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

export {
  SelectedVideoProvider,
  useSelectedVideo,
  SearchKeywordProvider,
  useSearchKeyword,
  ThemeStateProvider,
  useThemeState,
  IsClientLoadedProvider,
  useIsClientLoaded,
};
