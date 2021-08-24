import React from 'react';

import { render } from '@testing-library/react';
import {
  ActiveDropdownProvider,
  IsClientLoadedProvider,
  SearchKeywordProvider,
  SelectedVideoProvider,
  SessionDataProvider,
} from '../global-context';
import { BrowserRouter } from 'react-router-dom';

export const renderWithContext = (elem) => {
  const context = (
    <SessionDataProvider>
      <ActiveDropdownProvider>
        <IsClientLoadedProvider>
          <SearchKeywordProvider>
            <SelectedVideoProvider id="wrapper">{elem}</SelectedVideoProvider>
          </SearchKeywordProvider>
        </IsClientLoadedProvider>
      </ActiveDropdownProvider>
    </SessionDataProvider>
  );

  return render(context);
};

export const renderWithRouter = (elem, route) => {
  window.history.pushState({}, 'Test page', route);

  return render(elem, { wrapper: BrowserRouter });
};
